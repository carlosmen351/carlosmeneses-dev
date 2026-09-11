// src/components/WhatsAppButton.jsx
import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = () => {
  const phoneNumber = '525633057702';
  const message = encodeURIComponent('¡Hola, Carlos! Vi tu portafolio y me gustaría ponerme en contacto contigo.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.innerHeight + window.scrollY;
      
      // Umbral antes de llegar al final de la página (altura del footer aproximada ~120px + margen)
      const footerThreshold = documentHeight - 150;

      if (scrollPosition >= footerThreshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Ejecución inicial por si la pantalla ya está en el footer al cargar
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[999] flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-[#25D366]/50 transition-shadow duration-300"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Contact via WhatsApp"
        >
          {/* Ripple Animation */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10" />
          <FaWhatsapp className="w-8 h-8" />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
