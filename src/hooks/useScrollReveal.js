import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/gsap';

// Map the existing `.reveal-*` direction classes to GSAP "from" offsets.
const fromVarsFor = (el) => {
  if (el.classList.contains('reveal-down')) return { opacity: 0, y: -50 };
  if (el.classList.contains('reveal-left')) return { opacity: 0, x: -60 };
  if (el.classList.contains('reveal-right')) return { opacity: 0, x: 60 };
  if (el.classList.contains('reveal-scale')) return { opacity: 0, scale: 0.94 };
  // Default (and explicit `.reveal-up`): rise up into place.
  return { opacity: 0, y: 50 };
};

// Read the optional `.delay-N` class (delay-1 => 0.1s, ...).
const delayFor = (el) => {
  for (let i = 1; i <= 5; i++) {
    if (el.classList.contains(`delay-${i}`)) return i * 0.1;
  }
  return 0;
};

/**
 * Collects elements via the returned ref callback and reveals them on scroll
 * using GSAP + ScrollTrigger (synced to Lenis in SmoothScroll). Drop-in
 * replacement for the previous IntersectionObserver implementation — the same
 * `.reveal` / `.reveal-up` / `.delay-2` class conventions still apply.
 *
 * Uses gsap.fromTo with EXPLICIT end values (opacity:1, no offset). This is
 * deliberate: gsap.from() captures the element's current value as the end
 * state, which breaks under React StrictMode's mount→unmount→remount cycle
 * (the second mount would capture the already-hidden opacity:0 as the target
 * and animate 0→0, leaving content permanently invisible).
 */
const useScrollReveal = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    const elements = revealRefs.current.filter(Boolean);
    if (!elements.length) return;

    // Reduced-motion: show everything immediately, no transforms.
    if (prefersReducedMotion) {
      elements.forEach((el) => {
        el.classList.add('visible');
        gsap.set(el, { clearProps: 'opacity,transform' });
      });
      return;
    }

    const tweens = [];

    elements.forEach((el) => {
      // Neutralise the CSS reveal (opacity:0 + its own transition) so GSAP
      // has full, conflict-free control of the element.
      el.classList.add('visible');
      el.style.transition = 'none';

      const tween = gsap.fromTo(
        el,
        fromVarsFor(el),
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1,
          delay: delayFor(el),
          ease: 'power3.out',
          overwrite: 'auto',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        }
      );

      tweens.push(tween);
    });

    // Recalculate positions once images/fonts settle.
    ScrollTrigger.refresh();
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);

    return () => {
      window.removeEventListener('load', onLoad);
      tweens.forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });
      // Revert to the natural (visible) state so a StrictMode remount — or any
      // teardown — never leaves content stranded at opacity:0.
      elements.forEach((el) => {
        gsap.set(el, { clearProps: 'opacity,transform' });
        el.style.transition = '';
      });
    };
  }, []);

  const addRevealRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return addRevealRef;
};

export default useScrollReveal;
