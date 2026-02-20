import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://carlosmeneses.dev'; // ¡Asegúrate de cambiar esto a tu dominio real!
const OUTPUT_DIR = 'public';
const SITEMAP_FILE = 'sitemap.xml';
const POSTS_FILE = 'posts.json';

async function generateSitemap() {
  console.log('Generando sitemap.xml...');

  const postsPath = path.join(process.cwd(), OUTPUT_DIR, POSTS_FILE);
  const posts = JSON.parse(fs.readFileSync(postsPath, 'utf-8'));

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Rutas estáticas
  const staticRoutes = ['/', '/projects', '/blog', '/contacto'];
  staticRoutes.forEach(route => {
    sitemap += `  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>
`;
  });

  // Rutas de blog dinámicas
  posts.forEach(post => {
    sitemap += `  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  const outputPath = path.join(process.cwd(), OUTPUT_DIR, SITEMAP_FILE);
  fs.writeFileSync(outputPath, sitemap);
  console.log(`✅ Sitemap generado exitosamente en ${OUTPUT_DIR}/${SITEMAP_FILE}`);
}

generateSitemap();