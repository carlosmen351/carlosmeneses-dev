// src/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, tags, imageUrl, liveUrl, repoUrl, projectState }) => {
  const isInProgress = projectState === 'En Construcción' || projectState === 'En Desarrollo';
  return (
    <motion.div className="bg-background border border-primary/20 rounded-lg shadow-md p-6 flex flex-col h-full hover:shadow-primary/30 transition-shadow">
      <img src={imageUrl} alt={`Imagen del proyecto ${title}`} className="rounded-md mb-4 h-48 object-cover w-full" />
      <h3 className="text-xl font-bold mb-2 text-text">{title}</h3>

      {/* Mostramos el estado si está en progreso */}
      {isInProgress && (
        <span className="bg-secondary text-text text-sm font-bold px-2.5 py-0.5 rounded mb-2 inline-block">
          {projectState}
        </span>
      )}

      <p className="text-text/80 mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-secondary/20 text-primary text-sm font-normal px-2.5 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-auto">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-primary hover:bg-primary/80 text-background font-bold py-2 px-4 rounded transition-colors duration-300 ${isInProgress ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={(e) => isInProgress && e.preventDefault()}
        >
          Live Demo
        </a>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-secondary/40 hover:bg-secondary/60 text-text font-bold py-2 px-4 rounded transition-colors duration-300 ${isInProgress ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={(e) => isInProgress && e.preventDefault()}
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;