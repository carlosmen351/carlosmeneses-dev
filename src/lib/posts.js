export function getAllPosts() {
  const modules = import.meta.glob('/src/posts/*.mdx', { eager: true });
  const postData = [];

  for (const path in modules) {
    const module = modules[path];
    const slug = path.split('/').pop().replace('.mdx', '');

    const { frontmatter, default: Content } = module;

    postData.push({
      slug,
      ...frontmatter,
      Content,
    });
  }

  return postData.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Esta función reutiliza getAllPosts para encontrar un post específico
export function getPostBySlug(slug) {
  return getAllPosts().find(post => post.slug === slug);
}