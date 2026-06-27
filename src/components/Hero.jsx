import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImagePng from '../assets/images/hero_image.png';
import './Hero.css';
import MagneticButton from './MagneticButton';

const Hero = () => {
  const { scrollY } = useScroll();
  const rawY = useTransform(scrollY, [0, 800], ['0%', '18%']);
  const rawScale = useTransform(scrollY, [0, 800], [1, 1.07]);
  const bgY = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.4 });
  const bgScale = useSpring(rawScale, { stiffness: 60, damping: 20, mass: 0.4 });

  return (
    <section className="hero-new" id="home">
      {/* Parallax background layer */}
      <motion.div
        className="hero-bg"
        style={{
          backgroundImage: `url(${heroImagePng})`,
          y: bgY,
          scale: bgScale,
        }}
      />

      <div className="hero-content-wrap">
        {/* Badge */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero-badge-dot" />
          Precision Engineering
        </motion.div>

        {/* Primary heading */}
        <motion.h1
          className="hero-heading-primary"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {["Beyond", "Manufacturing"].map((line, i) => (
            <motion.span
              key={i}
              style={{ display: 'block', overflow: 'hidden', whiteSpace: 'nowrap' }}
              variants={{
                hidden: { y: '100%', opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
                }
              }}
            >
              {line}
            </motion.span>
          ))}
        </motion.h1>

        {/* Secondary muted heading */}
        <motion.h2
          className="hero-heading-secondary"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
          }}
        >
          {["Your Complete", "Defence Solutions Partner"].map((line, i) => (
            <motion.span
              key={i}
              style={{ display: 'block', overflow: 'hidden', whiteSpace: 'nowrap' }}
              variants={{
                hidden: { y: '100%', opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
                }
              }}
            >
              {line}
            </motion.span>
          ))}
        </motion.h2>

        {/* Body text */}
        <motion.p
          className="hero-body-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          From precision components to advanced defence assemblies, we
          transform complex engineering challenges into reliable, mission-ready
          solutions.
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <MagneticButton>
            <Link to="/product" className="btn-explore" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Explore More
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
