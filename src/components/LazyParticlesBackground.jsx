import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useParticles } from '../hooks/useParticles.jsx';

const ParticlesBackground = lazy(() => import('./ParticlesBackground'));

const LazyParticlesBackground = (props) => {
  const { particlesEnabled } = useParticles();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (!particlesEnabled) return;

    // Render particles after a short delay to prioritize main content
    const timer = setTimeout(() => setShouldRender(true), 500); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, [particlesEnabled]);

  if (!particlesEnabled) {
    return null;
  }

  return shouldRender ? <Suspense fallback={null}><ParticlesBackground {...props} /></Suspense> : null;
};

export default LazyParticlesBackground;