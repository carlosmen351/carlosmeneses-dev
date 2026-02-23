import { cvData } from '../../data/cv-data';

const Experience = () => {
  const { work } = cvData;

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary pb-2">Experiencia Profesional</h2>
      {work.map((job, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold text-text">{job.position}</h3>
          <p className="text-md font-medium text-gray-700 dark:text-gray-300">{job.company}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{job.startDate} - {job.endDate}</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            {job.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
