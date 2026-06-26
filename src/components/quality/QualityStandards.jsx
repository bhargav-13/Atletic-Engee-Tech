import React from 'react';
import { motion } from 'framer-motion';
import './QualityStandards.css';
import certImg from '../../assets/images/Industrial quality control lab.png';
import useParallax from '../../hooks/useParallax';

const E = [0.22, 1, 0.36, 1];

const QualityStandards = ({ addRevealRef }) => {
  const addParallax = useParallax(16);

  return (
    <section className="quality-standards-section">
      <div className="container">
        <motion.div
          className="standards-header"
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: E }}
        >
          <div className="standards-bg-text">9001:2015</div>
          <div className="standards-grid">
            <div className="standards-text">
              <h2 className="standards-main-title">
                <span className="text-dark">ISO 9001:2015 &</span> <br />
                <span className="text-grey">AS9100D Compliance</span>
              </h2>
              <div className="standards-line-desc">
                <div className="vertical-accent"></div>
                <p className="standards-p">
                  At Atletic Engee Tech, quality is not an inspection phase; it is an inherent property of our workflow.
                  Our facilities are audited to the highest aerospace and defense standards, ensuring every unit
                  shipped is mission-ready and compliant with global safety protocols.
                </p>
              </div>
            </div>
            <motion.div
              className="standards-cert-box"
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: 0.15, ease: E }}
            >
              <img src={certImg} alt="Quality Certification" className="standards-cert-img" ref={addParallax} style={{ display: 'block' }} />
              <div className="cert-caption">Official Certification Proof</div>
            </motion.div>
          </div>
        </motion.div>

        <div className="standards-cards-grid">
          {[
            { idx: '01/', dir: -1, title: 'FULL TRACEABILITY', body: 'Material certification for every batch. We provide complete lineage documentation from raw ore to finished component, ensuring total chain of custody for mission-critical hardware.', label: 'COMPLIANCE METRIC', value: '100% VERIFIED', cls: '' },
            { idx: '02/', dir: 1, title: 'CMM INSPECTION', body: 'Sub-micron dimensional verification using automated Coordinate Measuring Machines. Every geometric tolerance is validated against the master digital blueprint with extreme precision.', label: 'PRECISION TOLERANCE', value: '+/- 0.0001MM', cls: 'text-brass' },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="standard-card"
              initial={{ opacity: 0, x: card.dir * 48, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.85, delay: i * 0.1, ease: E }}
              whileHover={{ y: -8, scale: 1.015, boxShadow: '0 24px 48px rgba(0,0,0,0.1)' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="header-meta">
                <span className="index">{card.idx}</span>
                <h3 className="card-heading">{card.title}</h3>
              </div>
              <p className="card-body-text">{card.body}</p>
              <div className="card-status-footer">
                <div className="status-item">
                  <span className="label">{card.label}</span>
                  <span className={`value ${card.cls}`}>{card.value}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityStandards;
