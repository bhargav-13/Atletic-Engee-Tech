import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '../lib/gsap';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      // Exponential ease-out — buttery deceleration on each scroll impulse.
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
      // Native momentum on touch feels better than synthetic smoothing on phones.
      syncTouch: false,
      infinite: false,
    });

    // Expose Lenis so other components (e.g. anchor links) can use it.
    window.lenis = lenis;

    // Keep ScrollTrigger in lockstep with Lenis' virtual scroll position.
    lenis.on('scroll', ScrollTrigger.update);

    // Drive Lenis from GSAP's ticker instead of a second rAF loop —
    // one clock for scroll + animations means no jitter or drift.
    const update = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
