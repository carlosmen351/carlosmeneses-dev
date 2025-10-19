// src/pages/BlogPostPage.jsx
import { useParams } from 'react-router-dom';
import { getPostBySlug } from '../lib/posts';
import AnimatedCodeBlock from '../components/AnimatedCodeBlock';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <div>Post no encontrado</div>;
  }

  const { Content } = post;
  const components = { pre: AnimatedCodeBlock };

  return (
    <article className="prose prose-invert lg:prose-xl mx-auto">
      <h1
      className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500'
      >
        {post.title}
      </h1>
      <p className="text-slate-400">{post.date}</p>
      <hr />
      <div className="mb-8 p-8 rounded-lg bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 animate-gradient-flow" style={{ backgroundSize: '400% 400%' }}>
        <Content components={components} />
      </div>
    </article>
  );
};

export default BlogPostPage;