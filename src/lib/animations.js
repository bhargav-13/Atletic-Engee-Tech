/**
 * Shared premium animation variants for Framer Motion.
 * Single source of truth — import from here, not inline.
 */

/** Expo ease-out — the hallmark of premium motion design */
export const E = [0.22, 1, 0.36, 1];

/** Fade up with scale — standard section reveal */
export const fadeUp = (delay = 0, duration = 0.9) => ({
  initial: { opacity: 0, y: 44, scale: 0.97 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration, delay, ease: E },
});

/** Slide in from left with scale */
export const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -56, scale: 0.97 },
  whileInView: { opacity: 1, x: 0, scale: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, delay, ease: E },
});

/** Slide in from right with scale */
export const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 56, scale: 0.97 },
  whileInView: { opacity: 1, x: 0, scale: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, delay, ease: E },
});

/** Animate into view on mount (for hero sections, not scroll-triggered) */
export const enterUp = (delay = 0, duration = 0.9) => ({
  initial: { opacity: 0, y: 44, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration, delay, ease: E },
});

/** Container that staggers its children */
export const stagger = (delay = 0.08, delayChildren = 0.05) => ({
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: delay, delayChildren } },
});

/** Individual stagger child — pair with stagger() above */
export const staggerItem = {
  hidden:  { opacity: 0, y: 36, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: E } },
};

/** Clip-path title reveal — text rises up through a mask */
export const clipReveal = (delay = 0) => ({
  initial:     { clipPath: 'inset(100% 0 0 0)', opacity: 1 },
  whileInView: { clipPath: 'inset(0% 0 0 0)', opacity: 1 },
  viewport:    { once: true },
  transition:  { duration: 1, delay, ease: E },
});

/** Scale-in reveal — great for images and map containers */
export const scaleIn = (delay = 0) => ({
  initial:     { opacity: 0, scale: 0.94 },
  whileInView: { opacity: 1, scale: 1 },
  viewport:    { once: true, margin: '-60px' },
  transition:  { duration: 1, delay, ease: E },
});
