import { cvData } from '../../data/cv-data';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  const { name, email, url } = cvData.basics;

  return (
    <header className="flex flex-col items-center text-center p-8">
      <h1 className="text-4xl font-bold text-primary">{name}</h1>
      <p className="text-xl text-text mt-2">{t('cv.basics.label')}</p>
      <div className="flex space-x-4 mt-4 text-sm text-gray-500 dark:text-gray-400">
        <a href={`mailto:${email}`} className="hover:text-primary">{email}</a>
        <span>|</span>
        <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-primary">{url}</a>
        <span>|</span>
        <p>{t('cv.basics.location')}</p>
      </div>
      <p className="mt-6 max-w-2xl">{t('cv.basics.summary')}</p>
    </header>
  );
};

export default Header;
