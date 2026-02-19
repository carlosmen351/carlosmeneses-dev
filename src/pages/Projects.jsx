// src/pages/Projects.jsx
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import { myProjects } from '../lib/projects';
import ParticlesBackground from '../components/ParticlesBackground';
import { projectsParticlesOptions } from '../config/particles-projects-config';

const ProjectsPage = () => {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-16 relative"
    >
      <ParticlesBackground options={projectsParticlesOptions} />
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">{t('projectsPage.title')}</h1>
        <p className="mt-4 text-lg text-text/80">{t('projectsPage.subtitle')}</p>
      </header>

      <motion.div
        variants={containerVariants}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {myProjects.map((project) => (
          <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }} key={project.title}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;
