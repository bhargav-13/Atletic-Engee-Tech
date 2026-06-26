import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '../lib/gsap';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    const lenis = new Lenis({
      duration: isMobile ? 1.2 : 2.0,
      easing: (t) => 1.001 - Math.pow(2, -10 * t),
      smoothWheel: true,
      wheelMultiplier: isMobile ? 0.8 : 0.6,
      touchMultiplier: 1.15,
      syncTouch: true,
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
