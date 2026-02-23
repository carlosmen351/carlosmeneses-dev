import { cvData } from '../../data/cv-data';

const Education = () => {
  const { education } = cvData;

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary pb-2">Educación</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold text-text">{edu.institution}</h3>
          <p className="text-md text-gray-600 dark:text-gray-300">{edu.studyType} en {edu.area}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
