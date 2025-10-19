import { getAllPosts } from '../lib/posts';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Llamamos a la función directamente. ¡No más esperas!
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-800">Mi Blog</h1>
      <div className="space-y-8 max-w-3xl mx-auto "> {/* Centramos el contenido */}
        {posts.map(post => (
          <div className="mb-8 p-8 rounded-lg bg-gradient-to-r from-cyan-500 via-purple-750 to-slate-900 animate-gradient-flow" style={{ backgroundSize: '400% 400%' }}>
            <div key={post.slug} className="bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-cyan-500/30 transition-shadow">
            <p className="text-slate-400 text-sm mb-2">{post.date}</p>
            <h2 className="text-2xl font-bold mb-2">
              <Link to={`/blog/${post.slug}`} className="hover:text-cyan-400 transition-colors ">{post.title}</Link>
            </h2>
            <p className="text-slate-300">{post.description}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;