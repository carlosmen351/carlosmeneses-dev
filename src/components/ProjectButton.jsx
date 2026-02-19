import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectButton = ({ to, children }) => {
  const MotionLink = motion(Link);

  return (
    <MotionLink
      to={to}
      className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-bold rounded-full group bg-gradient-to-br from-primary to-accent text-background dark:text-white focus:ring-4 focus:outline-none focus:ring-primary dark:focus:ring-accent"
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.7)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <span className="relative px-8 py-3 transition-all ease-in duration-75 bg-background rounded-full group-hover:bg-opacity-0">
        {children}
      </span>
    </MotionLink>
  );
};

export default ProjectButton;