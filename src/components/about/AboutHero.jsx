import React from 'react';
import { motion } from 'framer-motion';
import aboutHeroBg from '../../assets/images/Group 13.png';
import { E } from '../../lib/animations';
import './AboutHero.css';

const lines = ['Our Legacy of'];
const mutedLines = ['Precision.'];

const AboutHero = () => {
  return (
    <section
      className="about-hero-section"
      style={{ '--about-hero-bg': `url(${aboutHeroBg})` }}
    >
      <div className="about-hero-content">
        <motion.div
          className="about-hero-badge"
          initial={{ opacity: 0, x: -28, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: E }}
        >
          VANGUARD PRECISION SYSTEMS
        </motion.div>

        <motion.h1
          className="about-hero-heading"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
        >
          {[...lines, ...mutedLines.map((l) => <span key={l} className="heading-muted">{l}</span>)].map((line, i) => (
            <div key={i} style={{ overflow: 'hidden', display: 'block' }}>
              <motion.span
                style={{ display: 'block' }}
                variants={{
                  hidden: { y: '100%', opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.95, ease: E } },
                }}
              >
                {line}
              </motion.span>
            </div>
          ))}
        </motion.h1>

        <motion.div
          className="about-hero-desc-wrapper"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: E }}
        >
          <div className="desc-border"></div>
          <p className="about-hero-desc">
            Engineering the future of defense through uncompromising structural
            integrity and technological sovereignty. At Atlantic Engee Tech,
            we forge the components that define modern security.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
