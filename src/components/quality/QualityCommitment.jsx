import React from 'react';
import { motion } from 'framer-motion';
import './QualityCommitment.css';

const QualityCommitment = ({ addRevealRef }) => {
  return (
    <section className="quality-commitment-wrapper">
      {/* 1. Absolute Integrity Section */}
      <div className="commitment-integrity-section">
        <div className="container">
          <div className="integrity-grid">
            <div className="integrity-left reveal reveal-left" ref={addRevealRef}>
              <h2 className="section-title">Our Commitment to <br />Absolute Integrity</h2>
              <div className="title-line"></div>
            </div>
            <div className="integrity-right reveal reveal-right" ref={addRevealRef}>
              <p className="integrity-p">
                At Precision Machining, quality isn't a department—it's the fundamental
                architecture of our organization. Every micron matters, because every mission
                depends on it.
              </p>
              <div className="integrity-sub-stats">
                <div className="sub-stat">
                  <span className="stat-label">Zero Deviation</span>
                  <p className="stat-desc">Continuously updated measurement rigor ensures zero component deviation.</p>
                </div>
                <div className="sub-stat">
                  <span className="stat-label">Metrology Purity</span>
                  <p className="stat-desc">Maintained Class 100 metrology lab cleanroom environment standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Zero Outcome Section (Dark) */}
      <div className="commitment-zero-section">
        <div className="container">
          <div className="zero-content reveal reveal-up" ref={addRevealRef}>
            <div className="zero-watermark">0</div>
            <div className="zero-text">
              <h2 className="zero-title">ZERO.</h2>
              <h3 className="zero-subtitle">The Only Acceptable Outcome.</h3>
              <p className="zero-desc">
                Poka-yoke methodologies are hard-coded into our tooling. By designing
                processes that make errors impossible, we eliminate the need for
                corrective action, shifting our focus entirely to optimization.
              </p>
              <div className="zero-stats-row">
                <div className="zero-stat-box">
                  <span className="stat-num">99.98%</span>
                  <span className="stat-info">FIRST-PASS YIELD</span>
                </div>
                <div className="zero-stat-divider"></div>
                <div className="zero-stat-box">
                  <span className="stat-num">0.02%</span>
                  <span className="stat-info">VARIANCE MARGIN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Consistent Performance Section */}
      <div className="commitment-performance-section">
        <div className="container">
          <div className="performance-header reveal reveal-up" ref={addRevealRef}>
            <div className="perf-header-left">
              <h2 className="section-title">Built for Consistent <br />Performance</h2>
              <div className="title-line"></div>
            </div>
            <div className="perf-header-right">
              <p className="performance-intro-p">
                We ensure every component meets strict quality standards through precision 
                manufacturing, delivering consistent performance, durability, and reliability 
                across all applications.
              </p>
            </div>
          </div>

          <div className="performance-cards-grid">
            {[
              { num: '01', title: 'Intake Validation', desc: 'Spectroscopic analysis of all raw alloys before foundry entry.' },
              { num: '02', title: 'Real-time Telemetry', desc: 'Sensor arrays monitoring thermal expansion during CNC machining.' },
              { num: '03', title: 'Surface Metrology', desc: 'Sub-micron laser scanning to verify geometric tolerances.' },
              { num: '04', title: 'Batch Lock-Down', desc: 'Final stress testing and serialization for full traceability.' }
            ].map((card, idx) => (
              <motion.div key={idx} className="performance-card reveal reveal-up" ref={addRevealRef} whileHover={{ y: -8, scale: 1.015, boxShadow: '0 24px 48px rgba(0,0,0,0.1)' }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                <span className="perf-card-num">{card.num}</span>
                <h4 className="perf-card-title">{card.title}</h4>
                <p className="perf-card-desc">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityCommitment;
