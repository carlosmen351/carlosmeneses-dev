import { useContext } from 'react';
import { ParticlesContext } from '../context/particles-context.js';

export const useParticles = () => {
  const context = useContext(ParticlesContext);
  if (context === undefined) {
    throw new Error('useParticles must be used within a ParticlesProvider');
  }
  return context;
};
