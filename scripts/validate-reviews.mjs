import fs from 'fs';

const GITHUB_USERNAME = 'carlosmen351';
const GITHUB_REPO = 'feedback';
const LABEL_SUCCESS = 'public-review';
// Token de GitHub con permisos para leer/escribir issues en el repo de feedback
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; 
// Webhook de despliegue de Vercel (opcional, si se quiere disparar desde aquí)
const VERCEL_DEPLOY_HOOK = process.env.VERCEL_DEPLOY_HOOK;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // IA para moderación

const API_BASE = `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/issues`;
const HEADERS = {
  Authorization: `token ${GITHUB_TOKEN}`,
  Accept: 'application/vnd.github.v3+json'
};

/**
 * Evalúa el comentario usando Inteligencia Artificial
 */
async function checkWithAI(text) {
  if (!OPENAI_API_KEY) {
    console.log('⚠️ No se encontró OPENAI_API_KEY, omitiendo validación por IA (aprobado por defecto).');
    return true;
  }

  console.log('🤖 Consultando a la IA sobre el contenido del comentario...');
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // Modelo rápido y económico
        messages: [
          {
            role: 'system',
            content: 'Eres un moderador de contenido automático. Tu tarea es analizar el comentario del usuario y responder ÚNICAMENTE con la palabra "APROBADO" si el comentario es respetuoso, constructivo o normal. Responde ÚNICAMENTE con "RECHAZADO" si contiene insultos, lenguaje ofensivo, discriminación, incitación al odio, spam o es altamente inapropiado. No des explicaciones.'
          },
          {
            role: 'user',
            content: text
          }
        ],
        temperature: 0
      })
    });

    if (!response.ok) {
      console.error('Error en la API de la IA:', response.statusText);
      return false; // Ante la duda o error, lo rechazamos por seguridad
    }

    const data = await response.json();
    const answer = data.choices[0].message.content.trim().toUpperCase();
    console.log(`🤖 Respuesta de la IA: ${answer}`);
    
    return answer === 'APROBADO';
  } catch (error) {
    console.error('Error comunicándose con la IA:', error);
    return false;
  }
}

/**
 * Función de validación del Agente
 */
async function validateIssue(issue) {
  console.log(`Evaluando issue #${issue.number}: "${issue.title}"`);
  
  const body = issue.body || '';
  
  // 1. Que no esté vacío o sea muy corto
  if (body.trim().length < 5) {
    return { valid: false, reason: 'El comentario es demasiado corto o está vacío.' };
  }
  
  // 2. Validación semántica mediante Inteligencia Artificial
  const isApprovedByAI = await checkWithAI(body);
  if (!isApprovedByAI) {
    return { valid: false, reason: 'El comentario ha sido clasificado como ofensivo o inapropiado por nuestro sistema de moderación automática (IA).' };
  }

  // Si pasa todas las validaciones
  return { valid: true };
}

async function addLabelToIssue(issueNumber, label) {
  const response = await fetch(`${API_BASE}/${issueNumber}/labels`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ labels: [label] })
  });
  if (!response.ok) throw new Error(`Error añadiendo etiqueta al issue ${issueNumber}`);
  console.log(`✅ Etiqueta '${label}' añadida al issue #${issueNumber}`);
}

async function commentAndCloseIssue(issueNumber, reason) {
  // Comentar
  await fetch(`${API_BASE}/${issueNumber}/comments`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ body: `Hola. Gracias por tu comentario, pero no ha podido ser aprobado por el siguiente motivo: ${reason}` })
  });
  // Cerrar
  await fetch(`${API_BASE}/${issueNumber}`, {
    method: 'PATCH',
    headers: HEADERS,
    body: JSON.stringify({ state: 'closed' })
  });
  console.log(`❌ Issue #${issueNumber} rechazado y cerrado. Motivo: ${reason}`);
}

async function triggerVercelDeploy() {
  if (!VERCEL_DEPLOY_HOOK) {
    console.log('⚠️ No se encontró VERCEL_DEPLOY_HOOK. Saltando despliegue automático.');
    return;
  }
  
  console.log('🚀 Disparando despliegue en Vercel...');
  const response = await fetch(VERCEL_DEPLOY_HOOK, { method: 'POST' });
  if (!response.ok) {
    console.error('Error disparando el deploy en Vercel:', response.statusText);
  } else {
    console.log('✅ Despliegue en Vercel iniciado con éxito.');
  }
}

async function run() {
  if (!GITHUB_TOKEN) {
    console.error('❌ Falta la variable de entorno GITHUB_TOKEN');
    process.exit(1);
  }

  try {
    // Obtenemos todos los issues abiertos
    const response = await fetch(`${API_BASE}?state=open`, { headers: HEADERS });
    if (!response.ok) throw new Error('Error obteniendo issues');
    
    const issues = await response.json();
    let newlyApprovedCount = 0;

    for (const issue of issues) {
      // Ignorar Pull Requests si se cuelan en el endpoint de issues
      if (issue.pull_request) continue;
      
      const hasSuccessLabel = issue.labels.some(l => l.name === LABEL_SUCCESS);
      
      // Solo evaluamos los que NO tienen la etiqueta aún
      if (!hasSuccessLabel) {
        const { valid, reason } = await validateIssue(issue);
        
        if (valid) {
          await addLabelToIssue(issue.number, LABEL_SUCCESS);
          newlyApprovedCount++;
        } else {
          await commentAndCloseIssue(issue.number, reason);
        }
      }
    }

    if (newlyApprovedCount > 0) {
      console.log(`🎉 Se aprobaron ${newlyApprovedCount} nuevo(s) comentario(s).`);
      await triggerVercelDeploy();
    } else {
      console.log('No hubo comentarios nuevos aprobados. No es necesario desplegar.');
    }

  } catch (error) {
    console.error('❌ Error general:', error);
    process.exit(1);
  }
}

run();
