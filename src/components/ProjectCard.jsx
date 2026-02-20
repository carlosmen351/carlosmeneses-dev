import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

// Carga diferida del componente motion.div de framer-motion
const MotionDiv = lazy(() => import('framer-motion').then(mod => ({ default: mod.motion.div })));

const ProjectCard = ({ title, description, techStack, link, projectType }) => {
  const getTechStackClasses = (tech) => {
    const techMap = {
      'Lit': 'base',
      'Web Components': 'base',
      'JS/TS': 'base',
      'React': 'base',
      'React Native (TS)': 'base',
      'Next.js': 'base',
      'Angular': 'base',
      'Preact / Vanilla JS': 'base',
      'Ionic (Capacitor)': 'base',
      'Astro': 'base',
      'JavaScript': 'base',
      'TypeScript': 'base',
      'Monorepo (pnpm)': 'architecture',
      'Firebase': 'tools',
      'SASS / CSS Modules': 'ui',
      'Styled Components': 'ui',
      'Tailwind CSS': 'ui',
      'PrimeNG / SCSS': 'ui',
      'Ionic UI / Stencil': 'ui',
      'Markdown + UnoCSS': 'ui',
      'SASS': 'ui',
      'Git + Bitbucket': 'git',
      'Git + GitHub': 'git',
      'Git + GitLab': 'git',
      'Git + Azure DevOps': 'git',
      'WCT + Jenkins + Artifactory': 'test',
      'Jest + Fastlane + App Center': 'test',
      'Cypress + Playwright + Vercel': 'test',
      'Karma/Jasmine + Azure Pipelines': 'test',
      'Mocha + GitHub Actions + Netlify': 'test',
      'Appium + CircleCI + Firebase': 'test',
      'Pa11y + GitLab CI + Cloudflare': 'test',
    };

    const colorMap = {
      base: 'bg-gray-400/20 text-gray-200 border-gray-400/30 dark:bg-gray-600/20 dark:text-gray-300 dark:border-gray-500/30',
      architecture: 'bg-blue-400/20 text-blue-200 border-blue-400/30 dark:bg-blue-600/20 dark:text-blue-300 dark:border-blue-500/30',
      tools: 'bg-orange-400/20 text-orange-200 border-orange-400/30 dark:bg-orange-600/20 dark:text-orange-300 dark:border-orange-500/30',
      ui: 'bg-green-400/20 text-green-200 border-green-400/30 dark:bg-green-600/20 dark:text-green-300 dark:border-green-500/30',
      git: 'bg-red-400/20 text-red-200 border-red-400/30 dark:bg-red-600/20 dark:text-red-300 dark:border-red-500/30',
      test: 'bg-purple-400/20 text-purple-200 border-purple-400/30 dark:bg-purple-600/20 dark:text-purple-300 dark:border-purple-500/30',
      default: 'bg-gray-600/20 text-gray-300 border-gray-500/30 dark:bg-gray-400/20 dark:text-gray-200 dark:border-gray-400/30',
    };

    const category = techMap[tech] || 'default';
    return colorMap[category] || colorMap.default;
  };

  const projectTypeGradient = {
    'Web Corporativa': 'from-cyan-500 to-blue-500',
    'Mobile Nativo': 'from-purple-500 to-indigo-500',
    'WebApp Moderna': 'from-green-400 to-teal-500',
    default: 'from-gray-700 to-gray-800',
  };

  const gradientClass = projectTypeGradient[projectType] || projectTypeGradient.default;

  return (
    <Suspense fallback={<div className="group rounded-2xl shadow-lg h-96 bg-secondary/30 overflow-hidden" />}>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
        className="group rounded-2xl shadow-lg h-96 bg-secondary/30 overflow-hidden"
      >
        <Link to={link} className="block h-full w-full">
          <div className={`relative h-3/5 w-full bg-gradient-to-br ${gradientClass} group-hover:blur-sm transition-all duration-300 ease-in-out`}>
            {/* Aquí podrías añadir una imagen de proyecto si la tuvieras */}
          </div>
          <div className="p-4 h-2/5 flex flex-col justify-between bg-text">
            <div>
              <h3 className="text-xl font-bold truncate text-background">{title}</h3>
              <p className="mt-1 text-sm text-background/80">{description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {techStack.slice(0, 4).map((tech) => (
                <span key={tech} className={`text-xs font-semibold px-2 py-1 rounded-full border ${getTechStackClasses(tech)} dark:!text-black`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </MotionDiv>
    </Suspense>
  );
};

export default ProjectCard;