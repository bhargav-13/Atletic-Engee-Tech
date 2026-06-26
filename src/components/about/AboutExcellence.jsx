import React from 'react';
import { motion } from 'framer-motion';
import highPrecisionIcon from '../../assets/images/High Precision.png';
import scalableProductionIcon from '../../assets/images/Scalable Production.png';
import globalStandardsIcon from '../../assets/images/Global Standards.png';
import './AboutExcellence.css';

const AboutExcellence = ({ addRevealRef }) => {
  return (
    <section className="about-excellence-section" id="about-excellence">
      <div className="container about-excellence-grid">
        <div className="excellence-left reveal reveal-left" ref={addRevealRef}>
          <h2 className="excellence-main-title">Manufacturing<br />Excellence</h2>
          <div className="precision-line"></div>
          <p className="excellence-main-desc">
            Our manufacturing capabilities are built on precision engineering, advanced CNC technology, and strict
            quality control. Every component produced under the Aero Precision banner undergoes rigorous validation
            to ensure mission success in critical environments.
          </p>
        </div>

        <div className="excellence-right">
          <div className="excellence-cards-grid">
            {/* High Precision Card */}
            <motion.div className="excellence-card-item card-light reveal reveal-up delay-1" ref={addRevealRef} whileHover={{ y: -8, scale: 1.015, boxShadow: '0 24px 48px rgba(0,0,0,0.1)' }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
              <div className="icon-box-dark">
                <img src={highPrecisionIcon} alt="High Precision" className="excellence-icon-img" />
              </div>
              <h3 className="card-title">HIGH PRECISION</h3>
              <p className="card-desc">Unrivaled accuracy for complex aerospace components.</p>
              <div className="tolerance-pills-bar">
                <span className="pill-label">TOLERANCE</span>
                <span className="pill-value">+/- 0.01 mm</span>
              </div>
            </motion.div>

            {/* Scalable Production Card */}
            <motion.div className="excellence-card-item card-dark reveal reveal-up delay-2" ref={addRevealRef} whileHover={{ y: -8, scale: 1.015, boxShadow: '0 24px 48px rgba(0,0,0,0.1)' }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
              <div className="icon-box-outline">
                <img src={scalableProductionIcon} alt="Scalable Production" className="excellence-icon-img" />
              </div>
              <h3 className="card-title">SCALABLE PRODUCTION</h3>
              <p className="card-desc">From prototypes to mass manufacturing, we adapt to your mission scale.</p>
            </motion.div>

            {/* Bottom Card (Wide) */}
            <motion.div className="excellence-card-wide reveal reveal-up delay-3" ref={addRevealRef} whileHover={{ y: -8, scale: 1.015, boxShadow: '0 24px 48px rgba(0,0,0,0.1)' }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
              <div className="wide-icon-circle">
                <img src={globalStandardsIcon} alt="Global Standards" className="excellence-icon-img" />
              </div>
              <div className="wide-content">
                <h3 className="card-title">GLOBAL STANDARDS</h3>
                <p className="card-desc">
                  ISO-compliant quality processes ensuring absolute reliability across every tactical unit.
                </p>
              </div>
              <div className="standards-pills">
                <span>ISO</span>
                <span>AS</span>
                <span className="highlight-pill">9100</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExcellence;

