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
            content: 'Eres un moderador de contenido extremadamente permisivo. Tu tarea es analizar el texto (que puede estar en cualquier idioma) y responder ÚNICAMENTE con la palabra "APROBADO" o "RECHAZADO". APROBADO: El texto es inofensivo (pruebas, saludos, preguntas, comentarios técnicos, críticas constructivas o texto normal). RECHAZADO: SOLO si contiene insultos explícitos, incitación al odio, o enlaces de spam malicioso. Ante la mínima duda, responde APROBADO. No des explicaciones, solo la palabra.'
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
      const errorData = await response.text();
      console.error('Error en la API de la IA:', response.status, errorData);
      throw new Error(`OpenAI API status: ${response.status}`);
    }

    const data = await response.json();
    const answer = data.choices[0].message.content.trim().toUpperCase();
    console.log(`🤖 Respuesta de la IA (raw): ${answer}`);
    
    // Lo hacemos con includes para ser menos estrictos si la IA responde con un punto final u otra cosa adicional
    return answer.includes('APROBADO');
  } catch (error) {
    console.error('Error comunicándose con la IA:', error);
    // Escape de seguridad: Lanzamos error para que la funcion superior decida aprobarlo por defecto
    throw new Error('Error al conectar con OpenAI'); 
  }
}

/**
 * Función de validación del Agente
 */
async function validateIssue(issue) {
  console.log(`Evaluando issue #${issue.number}: "${issue.title}"`);
  
  // Unimos el título y el cuerpo para no perder información en caso de que escriban todo en el título
  const fullText = `${issue.title} \n ${issue.body || ''}`.trim();
  
  // 1. Que no esté vacío o sea muy corto (bajamos tolerancia a 3 chars para permitir "yes", "ok", etc)
  if (fullText.length < 3) {
    return { valid: false, reason: 'El comentario está vacío o es demasiado corto.' };
  }
  
  // 2. Validación semántica mediante Inteligencia Artificial enviando TODO el texto
  try {
    const isApprovedByAI = await checkWithAI(fullText);
    if (!isApprovedByAI) {
      return { valid: false, reason: 'El comentario ha sido clasificado como ofensivo o inapropiado por nuestro sistema de moderación automática (IA).' };
    }
  } catch (err) {
     console.error('⚠️ Hubo un error técnico evaluando el issue con la IA:', err);
     console.log('⚠️ Aprobando comentario por defecto debido al fallo en la API de OpenAI.');
     // Si la IA falla (apikey mala, limite alcanzado, caida), se aprueba por defecto
     return { valid: true };
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
