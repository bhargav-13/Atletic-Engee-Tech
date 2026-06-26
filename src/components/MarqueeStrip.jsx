import { useEffect, useRef } from 'react';
import './MarqueeStrip.css';

const ITEMS = [
  'PRECISION ENGINEERING',
  '✦',
  'BRASS COMPONENTS',
  '✦',
  'DEFENCE SOLUTIONS',
  '✦',
  'ISO 9001:2015',
  '✦',
  'CNC MACHINING',
  '✦',
  'ZERO DEFECT',
  '✦',
  'QUALITY ASSURED',
  '✦',
];

const MarqueeStrip = ({ dark = false }) => {
  const trackRef = useRef(null);
  const xRef = useRef(0);
  const rafRef = useRef(null);
  const velRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Double the items for a seamless infinite loop
    track.innerHTML += track.innerHTML;
    const halfWidth = track.scrollWidth / 2;

    const tick = () => {
      // Lerp toward Lenis scroll velocity for smooth speed changes
      const lv = window.lenis?.velocity || 0;
      velRef.current += (lv - velRef.current) * 0.08;

      // Base speed + velocity boost (always moves left)
      xRef.current -= 0.55 + Math.abs(velRef.current) * 0.35;

      // Seamless loop: when we've moved one full copy, reset
      if (Math.abs(xRef.current) >= halfWidth) {
        xRef.current += halfWidth;
      }

      track.style.transform = `translateX(${xRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className={`marquee-strip ${dark ? 'marquee-dark' : 'marquee-light'}`} aria-hidden="true">
      <div ref={trackRef} className="marquee-track">
        {ITEMS.map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
