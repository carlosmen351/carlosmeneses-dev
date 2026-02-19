// scripts/generate-reviews-api.mjs
import fs from 'fs';
import path from 'path';

// --- Configuración ---
const GITHUB_USERNAME = 'carlosmen351';
const GITHUB_REPO = 'feedback';
const LABEL = 'public-review';
const OUTPUT_DIR = 'public';
const OUTPUT_FILE = 'reviews.json';
// --- Fin de Configuración ---

// Construye la URL de la API de GitHub
// Buscamos issues abiertos con la etiqueta especificada.
// Es buena práctica cerrar las issues una vez que la reseña ha sido "procesada",
// pero para facilitar el flujo, las buscamos abiertas.
const API_URL = `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/issues?labels=${LABEL}&state=open`;

// Path de salida para el archivo JSON
const outputPath = path.join(process.cwd(), OUTPUT_DIR, OUTPUT_FILE);

async function fetchReviews() {
  console.log(`Buscando reseñas en ${GITHUB_USERNAME}/${GITHUB_REPO}...`);

  try {
    const response = await fetch(API_URL, {
      headers: {
        // Aunque la API es pública, usar un token previene problemas de rate limiting.
        // El script buscará una variable de entorno llamada GITHUB_TOKEN.
        ...(process.env.GITHUB_TOKEN && {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        }),
      },
    });

    if (!response.ok) {
      throw new Error(`Error al contactar la API de GitHub: ${response.statusText}`);
    }

    const issues = await response.json();
    console.log(`Se encontraron ${issues.length} reseña(s) con la etiqueta '${LABEL}'.`);

    // Mapeamos los datos de las issues al formato que necesita nuestro frontend.
    const reviews = issues.map(issue => ({
      id: issue.id,
      user: {
        login: issue.user.login,
        avatar_url: issue.user.avatar_url,
      },
      body: issue.body,
      html_url: issue.html_url,
    }));

    // Aseguramos que el directorio de salida exista
    if (!fs.existsSync(path.dirname(outputPath))) {
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    }

    // Escribimos los datos procesados al archivo JSON.
    fs.writeFileSync(outputPath, JSON.stringify(reviews, null, 2));
    console.log(`✅ Reseñas guardadas exitosamente en ${OUTPUT_DIR}/${OUTPUT_FILE}`);

  } catch (error) {
    console.error('❌ Error al obtener las reseñas:', error.message);
    // En caso de error, creamos un archivo vacío para no romper el build.
    if (!fs.existsSync(path.dirname(outputPath))) {
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    }
    fs.writeFileSync(outputPath, JSON.stringify([]));
    console.log('Se ha creado un archivo de reseñas vacío para evitar errores en el build.');
  }
}

fetchReviews();
