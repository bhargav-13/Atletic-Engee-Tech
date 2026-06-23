import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins once for the whole app.
gsap.registerPlugin(ScrollTrigger);

// Respect users who prefer reduced motion — skip transforms, just reveal.
export const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Sensible global defaults for a polished, subtle feel.
gsap.defaults({ ease: 'power3.out', duration: 1 });

export { gsap, ScrollTrigger };
