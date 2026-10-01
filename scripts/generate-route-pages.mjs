import fs from 'node:fs/promises';
import path from 'node:path';
import { DEFAULT_OG_IMAGE, PUBLIC_ROUTE_SEO, SITE_URL } from '../src/data/seo-routes.js';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const TEMPLATE_FILE = path.join(DIST_DIR, 'index.html');
const POSTS_FILE = path.resolve(process.cwd(), 'public', 'posts.json');

const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
})[character]);

function setTag(html, pattern, tag) {
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `  ${tag}\n  </head>`);
}

function renderMetadata(template, metadata) {
  const canonicalUrl = new URL(metadata.path, SITE_URL).toString();
  const image = metadata.ogImage || DEFAULT_OG_IMAGE;
  let html = template.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(metadata.title)}</title>`);

  const tags = [
    [/<meta name="description"[^>]*>/i, `<meta name="description" content="${escapeHtml(metadata.description)}" />`],
    [/<link rel="canonical"[^>]*>/i, `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`],
    [/<meta property="og:type"[^>]*>/i, `<meta property="og:type" content="${escapeHtml(metadata.ogType || 'website')}" />`],
    [/<meta property="og:url"[^>]*>/i, `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`],
    [/<meta property="og:title"[^>]*>/i, `<meta property="og:title" content="${escapeHtml(metadata.title)}" />`],
    [/<meta property="og:description"[^>]*>/i, `<meta property="og:description" content="${escapeHtml(metadata.description)}" />`],
    [/<meta property="og:image"[^>]*>/i, `<meta property="og:image" content="${escapeHtml(image)}" />`],
    [/<meta property="og:image:alt"[^>]*>/i, '<meta property="og:image:alt" content="Logo de Carlos Meneses" />'],
    [/<meta name="twitter:card"[^>]*>/i, '<meta name="twitter:card" content="summary_large_image" />'],
    [/<meta name="twitter:url"[^>]*>/i, `<meta name="twitter:url" content="${escapeHtml(canonicalUrl)}" />`],
    [/<meta name="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${escapeHtml(metadata.title)}" />`],
    [/<meta name="twitter:description"[^>]*>/i, `<meta name="twitter:description" content="${escapeHtml(metadata.description)}" />`],
    [/<meta name="twitter:image"[^>]*>/i, `<meta name="twitter:image" content="${escapeHtml(image)}" />`],
  ];

  for (const [pattern, tag] of tags) html = setTag(html, pattern, tag);
  return html;
}

async function writeRoutePage(template, metadata) {
  if (metadata.path !== '/' && !/^\/[a-z0-9-]+(?:\/[a-z0-9-]+)*$/i.test(metadata.path)) {
    throw new Error(`Ruta pública inválida: ${metadata.path}`);
  }

  const outputPath = metadata.path === '/'
    ? TEMPLATE_FILE
    : path.join(DIST_DIR, metadata.path.slice(1), 'index.html');
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, renderMetadata(template, metadata));
}

async function generateRoutePages() {
  const [template, postsJson] = await Promise.all([
    fs.readFile(TEMPLATE_FILE, 'utf8'),
    fs.readFile(POSTS_FILE, 'utf8'),
  ]);
  const posts = JSON.parse(postsJson);

  for (const route of Object.values(PUBLIC_ROUTE_SEO)) {
    await writeRoutePage(template, route);
  }

  for (const post of posts) {
    if (!/^[a-z0-9-]+$/i.test(post.slug)) continue;
    await writeRoutePage(template, {
      path: `/blog/${post.slug}`,
      title: post.title,
      description: post.description || post.title,
      ogType: 'article',
    });
  }

  console.log(`Generated metadata HTML for ${Object.keys(PUBLIC_ROUTE_SEO).length + posts.length} public routes.`);
}

generateRoutePages().catch((error) => {
  console.error('Error generating route HTML:', error);
  process.exitCode = 1;
});