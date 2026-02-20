import { useTranslation } from 'react-i18next';
import { FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaCode, FaSatellite, FaCoffee, FaJenkins, FaJira, FaLinux, FaGithub} from 'react-icons/fa';
import React, { Suspense, lazy } from 'react';
import { SiSass } from 'react-icons/si';
import { Link } from 'react-router-dom';
const ProjectCard = lazy(() => import('../components/ProjectCard'));
import Button from '../components/Button';
import ProjectButton from '../components/ProjectButton'; // Import the new button
import { myProjects } from '../lib/projects';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion'; // Keep motion for GlowButton and direct usage
import SeoHead from '../components/SeoHead';
import LazyParticlesBackground from '../components/LazyParticlesBackground'; // Changed import
import { homeParticlesOptions } from '../config/particles-config';

const Typewriter = lazy(() => import('react-simple-typewriter').then(module => ({ default: module.Typewriter })));

const ReviewsSection = lazy(() => import('../components/ReviewsSection'));
const GlowButton = ({ children, to }) => (
  <motion.a
    as={Link} // Usa el componente Link de React Router
    to={to}    // Pasa la prop 'to' al Link
    whileHover={{
      scale: 1.05,
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
      textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
    }}
    transition={{ type: 'spring', stiffness: 300 }}
    className="px-8 py-3 rounded-full bg-primary text-background font-bold uppercase tracking-wider"
  >
    {children}
  </motion.a>
);

const Home = () => {
  const { t } = useTranslation();
  const typewriterWords = t('home.hero.typewriter', { returnObjects: true }) || [];

  const skillIcons = {
    'JavaScript': <FaJsSquare />,
    'React': <FaReact />,
    'Node.js': <FaNodeJs />,
    'Git': <FaGitAlt />,
    'SASS': <SiSass />,
    'Cells': <FaCode />,
    'Lit Element': <FaSatellite />,
    'Web Components': <FaCoffee />,
    'Jenkins': <FaJenkins />,
    'Jira': <FaJira />,
    'Linux': <FaLinux />,
    'GitHub': <FaGithub />
  };
  const skills = t('home.skills.list', { returnObjects: true }) || [];


  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50, rotateY: 0, rotateX: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      rotateY: 0, // Asegura que la rotación se reinicie
      rotateX: 0, // Asegura que la rotación se reinicie
      transition: { type: "spring", damping: 15, stiffness: 100 }
    },
  };

  return (
    <>
      <SeoHead
        title={t('home.seo.title')}
        description={t('home.seo.description')}
        canonicalUrl="https://carlosmeneses.dev/" />
    <div className="space-y-32 relative">
      <LazyParticlesBackground options={homeParticlesOptions} className="z-0" /> {/* Changed to LazyParticlesBackground */}
      {/* Hero Section */}
      <AnimatedSection variants={sectionVariants}>
        <div className="text-center flex flex-col items-center justify-center min-h-[80vh] relative overflow-hidden">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold leading-tight text-text mb-4 z-10"
          >
            {t('home.hero.name')}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-2 text-2xl md:text-4xl text-primary font-heading z-10"
          >
            <Suspense fallback={<span>{typewriterWords[0]}</span>}> {/* Fallback mientras carga */}
              <Typewriter
                words={typewriterWords}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </Suspense>
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-lg text-text/80 z-10"
          >
            {t('home.hero.description')}
          </motion.p>
          <motion.div variants={itemVariants} className="mt-12 flex gap-6 z-10">
            <GlowButton to="/projects"> {/* Cambiado a /projects */}
              {t('home.hero.viewWork')}
            </GlowButton>
            <Button as={Link} to="/contacto" variant="secondary">
              {t('home.hero.getInTouch')}
            </Button>
          </motion.div>
        </div>
      </AnimatedSection>
      
      {/* About Me Section */}
      <AnimatedSection variants={sectionVariants}>
        <div id="about" className="text-center max-w-3xl mx-auto relative z-10"> {/* Added relative z-10 to bring content above particles */}
          <h2 className="text-4xl font-bold text-center mb-6 text-primary">{t('home.about.title')}</h2>
          <motion.p variants={itemVariants} className="text-lg text-text/80 whitespace-pre-line">
            {t('home.about.description')}
          </motion.p>
        </div>
      </AnimatedSection>
      
      {/* Skills Section */}
      <AnimatedSection variants={sectionVariants}>
        <div id="skills">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">{t('home.skills.title')}</h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
            style={{ perspective: 1000 }}
          >
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center justify-center p-6 bg-text rounded-lg shadow-lg"
                whileHover={{
                  rotateY: 20,
                  rotateX: -10,
                  scale: 1.1,
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                variants={itemVariants}
              >
                <div className="text-6xl text-primary">{skillIcons[skill.name]}</div>
                <p className="mt-4 text-background font-semibold">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection variants={sectionVariants}>
        <div id="proyectos">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">{t('home.projects.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myProjects.map((project) => (
              <motion.div variants={itemVariants} key={project.title}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ProjectButton to="/projects"> {/* Use the new ProjectButton */}
              {t('home.projects.viewAll')}
            </ProjectButton>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Reviews Section */}
      <Suspense fallback={null}>
        <ReviewsSection />
      </Suspense>
      </div>
    </>
  )
};

export default Home;