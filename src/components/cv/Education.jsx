import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();
  const education = t('cv.education', { returnObjects: true });

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary pb-2">{t('cv.sections.education')}</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold text-text">{edu.institution}</h3>
          <p className="text-md text-gray-600 dark:text-gray-300">{edu.studyType} {t('cv.educationConnector')} {edu.area}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
