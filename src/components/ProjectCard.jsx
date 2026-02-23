import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

const MotionDiv = lazy(() => import('framer-motion').then(mod => ({ default: mod.motion.div })));

const ProjectCard = ({ title, description, techStack, link, image }) => {
  // Simplified tech stack styling for the new glassmorphism theme
  const getTechStackClasses = () => {
    // A base style for all tags that fits the dark/glassmorphism aesthetic
    return 'bg-slate-800/50 text-text/70 border border-white/5';
  };

  return (
    <Suspense fallback={<div className="h-96 rounded-2xl bg-slate-900/50" />}>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.03, y: -5 }}
        className="group rounded-2xl h-96 overflow-hidden 
                  bg-slate-900/50 backdrop-blur-md 
                  border border-white/10 
                  hover:border-accent/50 transition-all duration-300
                  ring-1 ring-inset ring-white/10"
      >
        <Link to={link} className="block h-full w-full" target='_blank' rel='noopener noreferrer'>
          {/* Project Image Area */}
          <div className="relative h-3/5 w-full border-b border-white/10">
            <img src={image} alt={title} className="h-full w-full object-cover" />
          </div>
          
          {/* Content Area */}
          <div className="p-4 h-2/5 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold truncate text-text">{title}</h3>
              <p className="mt-1 text-sm text-text/80">{description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {techStack.slice(0, 3).map((tech) => (
                <span key={tech} className={`text-xs font-semibold px-2 py-1 rounded-full ${getTechStackClasses(tech)}`}>
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