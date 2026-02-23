import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
  const { user, body, html_url } = review;

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { type: "spring", damping: 15, stiffness: 100 }
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      className="bg-secondary/20 dark:bg-secondary/30 p-6 rounded-lg shadow-md flex flex-col h-full"
    >
      {/* Card Header */}
      <div className="flex items-center mb-4">
        {/* Avatar as a link */}
        {user.html_url ? (
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            <img 
              src={user.avatar_url} 
              alt={`Avatar de ${user.login}`} 
              loading="lazy"
              className="w-12 h-12 rounded-full mr-4 border-2 border-primary"
            />
          </a>
        ) : (
          <img 
            src={user.avatar_url} 
            alt={`Avatar de ${user.login}`} 
            loading="lazy"
            className="w-12 h-12 rounded-full mr-4 border-2 border-primary"
          />
        )}
        
        <div>
          <h4 className="font-bold text-text dark:text-text">
            {/* Username as a styled link */}
            {user.html_url ? (
              <a 
                href={user.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline cursor-pointer"
              >
                {user.login}
              </a>
            ) : (
              user.login // Fallback for safety
            )}
          </h4>
          <p className="text-sm text-text/70 dark:text-text/70">Via GitHub</p>
        </div>
      </div>

      {/* Card Body */}
      <blockquote className="flex-grow italic text-text/90 dark:text-text/90 border-l-4 border-primary/50 pl-4">
        <p>"{body}"</p>
      </blockquote>

      {/* Card Footer */}
      <div className="mt-4 text-right">
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-primary hover:underline"
        >
          Ver en GitHub
          <FaGithub className="ml-2" />
        </a>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
