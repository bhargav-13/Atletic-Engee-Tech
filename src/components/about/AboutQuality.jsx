import React from 'react';
import { motion } from 'framer-motion';
import './AboutQuality.css';
import certImg from '../../assets/images/Industrial quality control lab.png';

const E = [0.22, 1, 0.36, 1];

const AboutQuality = ({ addRevealRef }) => {
  return (
    <section className="about-quality-section" id="certificates">
      <div className="container">
        <div className="quality-top-grid">
          <motion.div
            className="quality-text-content"
            initial={{ opacity: 0, x: -48, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: E }}
          >
            <div className="quality-bg-text">9001:2015</div>
            <h2 className="quality-title">
              <span className="title-primary">ISO 9001:2015 &</span> <br />
              <span className="title-secondary">AS9100D</span>
            </h2>
            <div className="quality-desc-container">
              <div className="desc-accent-line"></div>
              <p className="quality-description">
                Quality is not an inspection phase; it is an inherent property of our workflow.
                Our facilities are audited to the highest aerospace and defense standards,
                ensuring every unit shipped is mission-ready.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="quality-cert-container"
            initial={{ opacity: 0, x: 48, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: E }}
          >
            <img src={certImg} alt="Quality Certification" className="cert-image" />
          </motion.div>
        </div>

        <div className="quality-metrics-grid">
          {[
            { num: '01/', title: 'FULL TRACEABILITY', desc: 'Material certification for every batch. We provide complete lineage documentation from raw ore to finished component, ensuring total chain of custody for mission-critical hardware.', label: 'COMPLIANCE METRIC', value: '100% VERIFIED' },
            { num: '02/', title: 'CMM INSPECTION', desc: 'Sub-micron dimensional verification using automated Coordinate Measuring Machines. Every geometric tolerance is validated against the master digital blueprint.', label: 'PRECISION TOLERANCE', value: '+/- 0.0001MM' },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              className="quality-metric-card"
              initial={{ opacity: 0, y: 36, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: idx * 0.12, ease: E }}
              whileHover={{ y: -8, scale: 1.015, boxShadow: '0 24px 48px rgba(0,0,0,0.1)' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="metric-header">
                <span className="metric-number">{card.num}</span>
                <h3 className="metric-title">{card.title}</h3>
              </div>
              <p className="metric-desc">{card.desc}</p>
              <div className="metric-footer">
                <span className="footer-label">{card.label}</span>
                <span className="footer-value">{card.value}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutQuality;
