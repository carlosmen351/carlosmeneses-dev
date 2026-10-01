import Header from '../components/cv/Header';
import Experience from '../components/cv/Experience';
import Education from '../components/cv/Education';
import Skills from '../components/cv/Skills';
import SeoHead from '../components/SeoHead';
import { PUBLIC_ROUTE_SEO, SITE_URL, DEFAULT_OG_IMAGE } from '../data/seo-routes';

const CVPage = () => {
  return (
    <>
      <SeoHead
        title={PUBLIC_ROUTE_SEO.cv.title}
        description={PUBLIC_ROUTE_SEO.cv.description}
        canonicalUrl={`${SITE_URL}${PUBLIC_ROUTE_SEO.cv.path}`}
        ogType={PUBLIC_ROUTE_SEO.cv.ogType}
        ogImage={DEFAULT_OG_IMAGE}
      />
      <div id="cv-container" className="max-w-4xl mx-auto p-4 sm:p-8 bg-background text-text rounded-lg shadow-lg">
        <Header />
        <Experience />
        <Skills />
        <Education />
      </div>
    </>
  );
};

export default CVPage;
