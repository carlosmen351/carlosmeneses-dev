import { getAllPosts } from '../lib/posts';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Llamamos a la función directamente. ¡No más esperas!
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">Mi Blog</h1>
      <div className="space-y-8 max-w-3xl mx-auto "> {/* Centramos el contenido */}
        {posts.map(post => (
          <div className="mb-8 p-8 rounded-lg bg-gradient-to-r from-primary via-secondary to-background animate-gradient-flow" style={{ backgroundSize: '400% 400%' }}>
            <div key={post.slug} className="bg-background p-6 rounded-lg shadow-md hover:shadow-primary/30 transition-shadow">
            <p className="text-primary/70 text-sm mb-2">{post.date}</p>
            <h2 className="text-2xl font-bold mb-2">
              <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors ">{post.title}</Link>
            </h2>
            <p className="text-text/80">{post.description}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;