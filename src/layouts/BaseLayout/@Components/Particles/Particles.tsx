import { useEffect } from 'react';
import ParticlesJSConfig from 'config/particlesjs';
import { tsParticles } from 'tsparticles';

const Particles = () => {
  /**
   * Initialize the particles using the hook.
   */
  useEffect(() => {
   // @ts-ignore
    tsParticles.load('particles', ParticlesJSConfig);
    return () => {};
  }, []);

  return (
    <div
      className="particles"
      id="particles"
    />
  );
};

export default Particles;
