import React from 'react';
import { motion } from 'framer-motion';
import './TechMatrix.css';

const E = [0.22, 1, 0.36, 1];

const TechMatrix = ({ specs, addRevealRef }) => {
  return (
    <section className="tech-matrix-section">
      <motion.div
        className="matrix-header"
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.85, ease: E }}
      >
        <h2 className="matrix-heading">Technical Matrix</h2>
        <span className="spec-sheet-version">SPEC SHEET V4.02</span>
      </motion.div>
      <div className="matrix-grid">
        {specs.map((spec, idx) => (
          <motion.div
            key={idx}
            className="matrix-item"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: idx * 0.06, ease: E }}
            whileHover={{ y: -6, scale: 1.02, boxShadow: '0 16px 36px rgba(0,0,0,0.09)' }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="spec-id">
              {spec.icon ? <img src={spec.icon} alt={spec.label} className="tech-matrix-icon" /> : spec.id}
            </span>
            <div className="spec-content">
              <label className="spec-label">{spec.label}</label>
              <span className="spec-value">{spec.value}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechMatrix;
