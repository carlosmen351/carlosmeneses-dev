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
    <article className="prose dark:prose-invert lg:prose-xl mx-auto">
      <h1>
        {post.title}
      </h1>
      <p className="text-primary/70">{post.date}</p>
      <hr className="my-8" />
      <div className="mb-8 p-8 rounded-lg bg-gradient-to-r from-primary via-secondary to-background animate-gradient-flow" style={{ backgroundSize: '200% 200%' }}>
        <div className="bg-background rounded-lg">
          <div className="p-8">
            <Content components={components} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;