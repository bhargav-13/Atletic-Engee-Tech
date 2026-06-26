import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';

/**
 * Returns a ref callback. Attach it to any image/element inside an
 * overflow:hidden container. GSAP scrubs a yPercent offset so the element
 * moves slower than the page scroll, creating a parallax depth effect.
 *
 * @param {number} strength  – total yPercent range (default 20 = ±10%).
 *                             Lower = subtler. Higher = more dramatic.
 */
const useParallax = (strength = 20) => {
  const refs = useRef([]);

  useEffect(() => {
    const elements = refs.current.filter(Boolean);
    if (!elements.length) return;

    const tweens = elements.map((el) =>
      gsap.fromTo(
        el,
        { yPercent: -(strength / 2) },
        {
          yPercent: strength / 2,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
            invalidateOnRefresh: true,
          },
        }
      )
    );

    ScrollTrigger.refresh();

    return () => tweens.forEach((t) => { t.scrollTrigger?.kill(); t.kill(); });
  }, [strength]);

  const addRef = (el) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };

  return addRef;
};

export default useParallax;
