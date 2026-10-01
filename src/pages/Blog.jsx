import { getAllPosts } from '../lib/posts';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LazyParticlesBackground from '../components/LazyParticlesBackground'; // Changed import
import { blogParticlesOptions } from '../config/particles-blog-config';
import SeoHead from '../components/SeoHead';
import { PUBLIC_ROUTE_SEO, SITE_URL } from '../data/seo-routes';

const Blog = () => {
  const { t } = useTranslation();
  const posts = getAllPosts();

  return (
    <>
    <SeoHead
      {...PUBLIC_ROUTE_SEO.blog}
      canonicalUrl={`${SITE_URL}${PUBLIC_ROUTE_SEO.blog.path}`}
    />
    <div className="container mx-auto px-4 py-12 relative">
      <LazyParticlesBackground options={blogParticlesOptions} /> {/* Changed to LazyParticlesBackground */}
      <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{t('blogPage.title')}</h1>
      <div className="space-y-8 max-w-3xl mx-auto "> {/* Centramos el contenido */}
        {posts.map(post => (
          <div key={post.slug} className="mb-8 p-8 rounded-lg bg-gradient-to-r from-primary via-secondary to-background animate-gradient-flow" style={{ backgroundSize: '400% 400%' }}>
            <div className="bg-background p-6 rounded-lg shadow-md hover:shadow-primary/30 transition-shadow">
            <p className="text-primary text-sm mb-2">{post.date}</p>
            <h2 className="text-2xl font-bold mb-2">
              <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors ">{post.title}</Link>
            </h2>
            <p className="text-text/80">{post.description}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Blog;