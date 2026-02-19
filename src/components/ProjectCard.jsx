import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { techLabelColors, techCategories, projectGradients } from '../config/color-config';

const ProjectCard = ({ title, description, techStack, link, projectType }) => {

  const getTechLabelStyle = (tech) => {
    const category = techCategories[tech] || 'default';
    return techLabelColors[category] || techLabelColors.default;
  };

  const gradient = projectGradients[projectType] || projectGradients.default;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
      className="group rounded-2xl shadow-lg h-96 bg-secondary/30 overflow-hidden"
    >
      <Link to={link} className="block h-full w-full">
        {/* Visual (Top 60%) */}
        <div className={`relative h-3/5 w-full bg-gradient-to-br ${gradient} group-hover:blur-sm transition-all duration-300 ease-in-out`}>
          {/* image can be placed here as <img src={image} ... /> */}
        </div>

        {/* Body (Bottom 40%) */}
        <div className="p-4 h-2/5 flex flex-col justify-between bg-text">
          <div>
            <h3 className="text-xl font-bold truncate text-background">{title}</h3>
            <p className="mt-1 text-sm text-background/80">{description}</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {techStack.slice(0, 4).map((tech) => (
              <span key={tech} className={`text-xs font-semibold px-2 py-1 rounded-full border ${getTechLabelStyle(tech)} dark:!text-black`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;