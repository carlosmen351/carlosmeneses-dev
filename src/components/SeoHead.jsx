import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { DEFAULT_OG_IMAGE } from '../data/seo-routes';

const SeoHead = ({ title, description, canonicalUrl, ogType = 'website', ogImage = DEFAULT_OG_IMAGE, noIndex = false, lang = 'es' }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.resolvedLanguage?.split('-')[0] || i18n.language?.split('-')[0] || lang;

  return (
    <Helmet>
      <html lang={currentLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {noIndex && <meta name="robots" content="noindex, follow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Logo de Carlos Meneses" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {canonicalUrl && <meta name="twitter:url" content={canonicalUrl} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SeoHead;