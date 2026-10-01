import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  const skills = t('cv.skills', { returnObjects: true });

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary pb-2">{t('cv.sections.skills')}</h2>
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold text-text">{skill.name}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {skill.keywords.map((keyword, i) => (
              <span key={i} className="bg-primary text-background text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
