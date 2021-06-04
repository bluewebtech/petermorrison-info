import { useEffect } from 'react';
import ParticlesJSConfig from 'config/particlesjs';
require('particles.js');

const Particles = () => {
  /**
   * Initialize the particles using the hook.
   *
   * @return {Void}
   */
  useEffect(() => {
    const windowObject = (window as any);
    windowObject.pJSDom = [];
    windowObject.particlesJS('particles', ParticlesJSConfig);
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
