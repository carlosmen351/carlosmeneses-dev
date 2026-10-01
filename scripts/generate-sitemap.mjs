import fs from 'fs';
import path from 'path';
import { PUBLIC_ROUTE_SEO, SITE_URL } from '../src/data/seo-routes.js';

const OUTPUT_DIR = 'public';
const SITEMAP_FILE = 'sitemap.xml';
const POSTS_FILE = 'posts.json';

const escapeXml = (value) => String(value).replace(/[<>&'\"]/g, (character) => ({
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  "'": '&apos;',
  '"': '&quot;',
})[character]);

const isValidDate = (value) => /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value));

async function generateSitemap() {
  console.log('Generando sitemap.xml...');

  const postsPath = path.join(process.cwd(), OUTPUT_DIR, POSTS_FILE);
  const posts = JSON.parse(fs.readFileSync(postsPath, 'utf-8'));

  const urls = Object.values(PUBLIC_ROUTE_SEO).map(({ path: routePath }) => ({
    loc: new URL(routePath, SITE_URL).toString(),
  }));

  for (const post of posts) {
    if (!/^[a-z0-9-]+$/i.test(post.slug)) continue;
    urls.push({
      loc: new URL(`/blog/${post.slug}`, SITE_URL).toString(),
      lastmod: isValidDate(post.date) ? post.date : undefined,
    });
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ loc, lastmod }) => `  <url>
    <loc>${escapeXml(loc)}</loc>${lastmod ? `
    <lastmod>${lastmod}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>
`;

  const outputPath = path.join(process.cwd(), OUTPUT_DIR, SITEMAP_FILE);
  fs.writeFileSync(outputPath, sitemap);
  console.log(`✅ Sitemap generado exitosamente en ${OUTPUT_DIR}/${SITEMAP_FILE}`);
}

generateSitemap();