import { motion } from 'framer-motion'; // Keep motion for the default button
import { Link } from 'react-router-dom';

const Button = ({ as: Component = 'button', variant = 'primary', children, ...rest }) => {
  const baseStyles = 'font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-background';

  const variants = {
    primary: 'bg-primary text-background hover:bg-primary/90 focus:ring-primary',
    secondary: 'bg-secondary text-text hover:bg-secondary/90 focus:ring-secondary',
    tertiary: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-background focus:ring-primary',
    quaternary: 'bg-accent text-background hover:bg-accent/90 focus:ring-accent',
  };

  const classes = `${baseStyles} ${variants[variant]}`;

  // Si el componente es un React Router Link, lo manejamos específicamente
  // para asegurar que se renderice como una etiqueta <a> para una navegación
  // y estilos adecuados. Usamos motion.a y pasamos el componente Link
  // a través de la prop 'as'.
  if (Component === Link) {
    return (
      <motion.a
        as={Link}
        className={classes}
        whileTap={{ scale: 0.95 }}
        {...rest}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button // Por defecto, renderiza un motion.button para botones regulares
      className={classes}
      whileTap={{ scale: 0.95 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default Button;