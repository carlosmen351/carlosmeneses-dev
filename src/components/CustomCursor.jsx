import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const mouseEnter = (e) => {
      const target = e.target;
      // Comprueba si el objetivo o alguno de sus ancestros es un enlace o botón
      if (target.closest('a') || target.closest('button')) {
        setCursorVariant('link');
      } 
      // Comprueba si el objetivo o alguno de sus ancestros es un elemento de texto
      else if (target.closest('h1') || target.closest('h2') || target.closest('h3') || target.closest('p') || target.closest('span')) {
        setCursorVariant('text');
      } else { // Por defecto para todos los demás elementos
        setCursorVariant('default'); // Revertir a 'default' si no se cumple ninguna condición específica
      }
    };
    
    const mouseLeave = () => {
      setCursorVariant('default');
    };

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseover", mouseEnter);
    document.addEventListener("mouseout", mouseLeave);


    return () => {
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseover", mouseEnter);
      document.removeEventListener("mouseout", mouseLeave);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      mixBlendMode: "difference"
    },
    text: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "rgba(255, 255, 255, 1)",
      mixBlendMode: "difference"
    },
    link: {
      height: 40,
      width: 40,
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      backgroundColor: "rgba(88, 166, 255, 0.5)",
    }
  };
  

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  );
};

export default CustomCursor;
