// scripts/generate-posts-api.mjs
import fs from 'fs/promises';
import path from 'path';

const POSTS_DIR = path.resolve(process.cwd(), 'src/posts');
const OUTPUT_DIR = path.resolve(process.cwd(), 'public');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'posts.json');

// A simple frontmatter parser
function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]+?)\r?\n---/);
  if (!match) {
    return { frontmatter: {}, content: content };
  }

  const frontmatterText = match[1];
  const body = content.substring(match[0].length);

  const frontmatter = {};
  frontmatterText.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      const value = valueParts.join(':').trim().replace(/^"|"$/g, ''); // Trim and remove quotes
      frontmatter[key.trim()] = value;
    }
  });

  return { frontmatter, content: body.trim() };
}

async function generatePostsApi() {
  try {
    console.log('Generating blog posts API...');
    const files = await fs.readdir(POSTS_DIR);
    const mdxFiles = files.filter(file => path.extname(file) === '.mdx');

    const posts = [];
    for (const file of mdxFiles) {
      const filePath = path.join(POSTS_DIR, file);
      const fileContent = await fs.readFile(filePath, 'utf-8');
      
      const { frontmatter, content } = parseFrontmatter(fileContent);
      const slug = path.basename(file, path.extname(file));

      if (frontmatter.title && frontmatter.date) {
        posts.push({
          slug,
          title: frontmatter.title,
          date: frontmatter.date,
          description: frontmatter.description,
          // We can generate a summary or use the description. For now, let's not include the full content.
          // content: content, 
        });
      }
    }

    // Sort posts by date in descending order
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Ensure public directory exists
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // Write the JSON file
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(posts, null, 2));

    console.log(`Successfully generated ${posts.length} posts to ${OUTPUT_FILE}`);

  } catch (error) {
    console.error('Error generating posts API:', error);
    process.exit(1);
  }
}

generatePostsApi();