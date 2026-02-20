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
      className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'
      >
        {post.title}
      </h1>
      <p className="text-primary/70">{post.date}</p>
      <hr className="my-8" />
      <div className="mb-8 p-8 rounded-lg bg-gradient-to-r from-background via-secondary/40 to-background animate-gradient-flow">
        <Content components={components} />
      </div>
    </article>
  );
};

export default BlogPostPage;