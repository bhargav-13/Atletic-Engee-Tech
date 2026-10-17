import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/gsap';

// Starting offset for each `.reveal-*` direction class. The offset is applied
// through the CSS `translate` property (via --rv-x / --rv-y, see index.css),
// NOT `transform`, so it never fights Framer Motion hover/tap transforms on
// the same element.
const offsetFor = (el) => {
  if (el.classList.contains('reveal-down')) return { '--rv-x': '0px', '--rv-y': '-40px' };
  if (el.classList.contains('reveal-left')) return { '--rv-x': '-48px', '--rv-y': '0px' };
  if (el.classList.contains('reveal-right')) return { '--rv-x': '48px', '--rv-y': '0px' };
  if (el.classList.contains('reveal-scale')) return { '--rv-x': '0px', '--rv-y': '24px' };
  return { '--rv-x': '0px', '--rv-y': '40px' }; // default + `.reveal-up`
};

/**
 * Collects elements via the returned ref callback and reveals them on scroll
 * with GSAP ScrollTrigger (synced to Lenis in SmoothScroll). Elements that
 * enter the viewport together (e.g. a row of cards) are batched and cascade
 * in with a short stagger instead of all moving at once.
 *
 * Uses explicit from/to values (never gsap.from) so React StrictMode's
 * mount → unmount → remount can't capture a hidden state as the target.
 */
const useScrollReveal = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    const elements = revealRefs.current.filter(Boolean);
    if (!elements.length) return;

    // Neutralise the CSS-only fallback (opacity:0 + transition) so GSAP owns it.
    elements.forEach((el) => {
      el.classList.add('visible');
      el.style.transition = 'none';
    });

    if (prefersReducedMotion) return;

    elements.forEach((el) => gsap.set(el, { opacity: 0, ...offsetFor(el) }));

    const triggers = ScrollTrigger.batch(elements, {
      start: 'top 88%',
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          '--rv-x': '0px',
          '--rv-y': '0px',
          duration: 1,
          ease: 'expo.out',
          stagger: 0.09,
          overwrite: true,
        }),
    });

    // Recalculate positions once images/fonts settle.
    ScrollTrigger.refresh();
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);

    return () => {
      window.removeEventListener('load', onLoad);
      triggers.forEach((t) => t.kill());
      gsap.killTweensOf(elements);
      // Back to the natural visible state so a remount never strands content.
      elements.forEach((el) => {
        gsap.set(el, { clearProps: 'opacity,--rv-x,--rv-y' });
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
