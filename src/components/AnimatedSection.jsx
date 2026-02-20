import React, { lazy, Suspense } from 'react';

// Carga diferida del componente motion.section de framer-motion
const MotionSection = lazy(() => import('framer-motion').then(mod => ({ default: mod.motion.section })));

const AnimatedSection = ({ children, variants }) => (
  <Suspense fallback={<section className="py-16">{children}</section>}>
    <MotionSection
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-16"
    >
      {children}
    </MotionSection>
  </Suspense>
);

export default AnimatedSection;