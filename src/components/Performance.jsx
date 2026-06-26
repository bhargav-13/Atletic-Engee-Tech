import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import perfImage from '../assets/images/Rectangle 45.png';
import qualityControlImage from '../assets/images/Quality Control.png';
import productionEfficiencyImage from '../assets/images/Production Efficiency.jpg';
import complianceImage from '../assets/images/Compliance.jpg';
import './Performance.css';

const tabData = [
  {
    label: 'CNC Machining',
    image: perfImage,
    imageAlt: 'CNC Machining Facility',
    card1: {
      title: 'High Accuracy Machining',
      items: [
        'Production Type: CNC Precision Manufacturing',
        'Tolerance Level: ±0.01 mm',
        'Material Grade: High-Quality Brass',
        'Inspection Status: Approved',
      ],
    },
    card2: 'Manufactured with precision, not compromise.',
  },
  {
    label: 'Quality Control',
    image: qualityControlImage,
    imageAlt: 'Quality Control Lab',
    card1: {
      title: 'High Accuracy Machining',
      items: [
        'Inspection Process: Multi-Stage Quality Inspection',
        'Testing Equipment: Advanced Precision Measuring Instruments',
        'Quality Standard: Dimensional & Functional Verification',
        'Defect Rate: Less than 0.1%',
        'Inspection Status: Approved',
      ],
    },
    card2: 'Faster production cycles with maximum efficiency and uncompromised precision.',
  },
  {
    label: 'Production Efficiency',
    image: productionEfficiencyImage,
    imageAlt: 'Production Efficiency',
    card1: {
      title: 'High Accuracy Machining',
      items: [
        'Production Process: Lean Manufacturing System',
        'Machine Utilization: High-Speed CNC Automation',
        'Workflow: Streamlined Production Scheduling',
        'On-Time Delivery Rate: 98.5%',
        'Production Status: Optimized',
      ],
    },
    card2: 'Faster production cycles with maximum efficiency and uncompromised precision.',
  },
  {
    label: 'Compliance',
    image: complianceImage,
    imageAlt: 'Compliance Standards',
    card1: {
      title: 'High Accuracy Machining',
      items: [
        'Quality Certification: ISO 9001:2015 Certified',
        'Material Compliance: RoHS & REACH Compliant',
        'Documentation: Complete Production Traceability',
        'Regular Audits: Continuous Process Improvement',
        'Compliance Status: Verified',
      ],
    },
    card2: 'Manufacturing that meets global standards for quality, safety, and customer confidence.',
  },
];

const Performance = () => {
  const [activePerfTab, setActivePerfTab] = useState(0);

  const active = tabData[activePerfTab];

  return (
    <section className="section perf-section" id="manufacturing">
      <motion.div
        className="perf-header"
        initial={{ opacity: 0, y: 44, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="perf-title">
          <h2>Precision Manufacturing,<br />Built for Performance</h2>
          <div className="perf-underline"></div>
        </div>
        <div className="perf-desc">
          <p>
            We use advanced CNC machining and automated processes to ensure high precision. Strict quality control guarantees consistent and reliable brass components. Built to meet global standards for defense, EV, and industrial applications.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="perf-tabs"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {tabData.map((tab, i) => (
          <div
            key={i}
            className={`perf-tab ${activePerfTab === i ? 'active' : ''}`}
            onClick={() => setActivePerfTab(i)}
          >
            {tab.label}
            {activePerfTab === i && (
              <motion.div
                layoutId="perf-tab-active"
                className="perf-tab-underline"
                initial={false}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'var(--accent)'
                }}
              />
            )}
          </div>
        ))}
      </motion.div>

      <div className="perf-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePerfTab}
            className="perf-details"
            initial={{ opacity: 0, x: -30, filter: 'blur(4px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: 30, filter: 'blur(4px)' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>Details</h3>

            <div className="perf-card">
              <div className="perf-card-header perf-card-header-custom">
                <span className="perf-ring"></span>
                <h4>{active.card1.title}</h4>
              </div>
              <ul className="perf-list">
                {active.card1.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="perf-card">
              <div className="perf-card-header">
                <span className="perf-ring"></span>
                <h4>{active.card2}</h4>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`img-${activePerfTab}`}
            className="perf-image"
            initial={{ opacity: 0, scale: 0.93, filter: 'blur(6px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.97, filter: 'blur(4px)' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={active.image} alt={active.imageAlt} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Performance;
