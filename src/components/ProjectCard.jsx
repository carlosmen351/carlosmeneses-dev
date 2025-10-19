// src/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, tags, imageUrl, liveUrl, repoUrl, projectState }) => {
  const isInProgress = projectState === 'En Construcción' || projectState === 'En Desarrollo';
  return (
    <motion.div className="bg-slate-800 rounded-lg shadow-md p-6 flex flex-col h-full hover:shadow-cyan-500/30 transition-shadow">
      <img src={imageUrl} alt={`Imagen del proyecto ${title}`} className="rounded-md mb-4 h-48 object-cover w-full" />
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>

      {/* Mostramos el estado si está en progreso */}
      {isInProgress && (
        <span className="bg-orange-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded mb-2 inline-block">
          {projectState}
        </span>
      )}

      <p className="text-slate-300 mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-slate-700 text-cyan-400 text-xs font-medium px-2.5 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-auto">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ${isInProgress ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={(e) => isInProgress && e.preventDefault()}
        >
          Live Demo
        </a>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ${isInProgress ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={(e) => isInProgress && e.preventDefault()}
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;