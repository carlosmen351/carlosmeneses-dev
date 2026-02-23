import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const ParticlesBackground = ({ options, className = "" }) => { // Accept className prop
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log('loaded particles container:', container);
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className={`absolute inset-0 z-0 ${className}`} // Apply className prop and set base z-index
      />
    );
  }

  return <></>;
};

export default ParticlesBackground;
