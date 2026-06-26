import React from 'react';
import { motion } from 'framer-motion';
import './ReliabilityBanner.css';
import trustIconSvg from '../../assets/images/Icon (6).svg';

const E = [0.22, 1, 0.36, 1];
const certs = ['ISO 9001:2015', 'AS9100D', 'ROHS COMPLIANT', 'REACH'];

const ReliabilityBanner = ({ addRevealRef }) => {
  return (
    <section className="reliability-section">
      <motion.div
        className="reliability-container"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: E }}
      >
        <motion.div
          className="trust-icon"
          initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: E }}
        >
          <img src={trustIconSvg} alt="Trust Icon" className="trust-svg" />
        </motion.div>
        <motion.h2
          className="reliability-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: E }}
        >
          Certified Reliability
        </motion.h2>
        <motion.p
          className="reliability-text"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.42, ease: E }}
        >
          Every product we build is subject to a 100% optical inspection. We maintain strict compliance with global engineering standards to ensure your mission-critical components are always operational.
        </motion.p>
        <div className="cert-logos">
          {certs.map((cert, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 14, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.08, ease: E }}
            >
              {cert}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ReliabilityBanner;
