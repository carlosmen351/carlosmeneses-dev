// src/components/AnimatedCodeBlock.jsx
import { motion } from 'framer-motion';

//<pre>
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05, // Retraso entre la animación de cada línea
    },
  },
};

//<span>
const lineVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const AnimatedCodeBlock = ({ children }) => {
  const codeString = children.props.children.trim();
  const codeLines = codeString.split('\n');

  return (
    <motion.pre
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="language-js"
    >
      {codeLines.map((line, index) => (
        <motion.span key={index} variants={lineVariants} style={{ display: 'block' }}>
          {line}
        </motion.span>
      ))}
    </motion.pre>
  );
};

export default AnimatedCodeBlock;