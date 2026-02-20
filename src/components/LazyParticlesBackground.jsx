import React, { lazy, Suspense, useEffect, useState } from 'react';

const ParticlesBackground = lazy(() => import('./ParticlesBackground'));

const LazyParticlesBackground = (props) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Render particles after a short delay to prioritize main content
    const timer = setTimeout(() => setShouldRender(true), 500); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  return shouldRender ? <Suspense fallback={null}><ParticlesBackground {...props} /></Suspense> : null;
};

export default LazyParticlesBackground;