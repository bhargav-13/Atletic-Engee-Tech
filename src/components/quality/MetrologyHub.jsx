import React from 'react';
import { motion } from 'framer-motion';
import './MetrologyHub.css';
import vmmImg from '../../assets/images/Precision Measurement.png';
import useParallax from '../../hooks/useParallax';

const E = [0.22, 1, 0.36, 1];

const badges = ['2.5D MEASUREMENT', 'CNC AUTOMATED', 'SUB-MICRON RESOLUTION'];
const features = [
  'Fully automated multi-axis inspection pathways',
  'Optical zoom capacity up to 100x for micro-feature analysis',
  'Instant data logging for comprehensive QC reporting',
];

const MetrologyHub = ({ addRevealRef }) => {
  const addParallax = useParallax(18);

  return (
    <section className="metrology-hub-section">
      <div className="container">
        <div className="vmm-grid">
          <motion.div
            className="vmm-content"
            initial={{ opacity: 0, x: -48, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: E }}
          >
            <div className="vmm-watermark">VMM-<span>01</span></div>
            <h2 className="vmm-title">Vision Measuring Machine</h2>

            <div className="vmm-badges">
              {badges.map((b, i) => (
                <motion.span
                  key={i}
                  className="vmm-badge"
                  initial={{ opacity: 0, y: 12, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: E }}
                >
                  {b}
                </motion.span>
              ))}
            </div>

            <ul className="vmm-features">
              {features.map((feat, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: E }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="check-icon">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {feat}
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#datasheet"
              className="datasheet-link"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.85, ease: E }}
              whileHover={{ letterSpacing: '0.12em' }}
            >
              TECHNICAL DATASHEET
            </motion.a>
          </motion.div>

          <motion.div
            className="vmm-visual"
            initial={{ opacity: 0, x: 48, scale: 0.94 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.95, delay: 0.1, ease: E }}
          >
            <div className="vmm-image-wrapper" style={{ overflow: 'hidden' }}>
              <img src={vmmImg} alt="Vision Measuring Machine" className="vmm-image" ref={addParallax} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MetrologyHub;

