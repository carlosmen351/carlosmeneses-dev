import React, { useState, useMemo } from 'react';
import { ParticlesContext } from './particles-context.js';

// 2. Crear el Proveedor del Contexto
export const ParticlesProvider = ({ children }) => {
  const [particlesEnabled, setParticlesEnabled] = useState(true);

  const toggleParticles = () => {
    setParticlesEnabled(prev => !prev);
  };

  // Usamos useMemo para evitar re-renders innecesarios en los consumidores del contexto
  const value = useMemo(() => ({
    particlesEnabled,
    toggleParticles,
  }), [particlesEnabled]);

  return (
    <ParticlesContext.Provider value={value}>
      {children}
    </ParticlesContext.Provider>
  );
};
