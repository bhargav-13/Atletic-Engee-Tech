import React from 'react';
import { motion } from 'framer-motion';
import skilledWorkforce from '../../assets/images/Skilled Workforce.png';
import highVolume from '../../assets/images/High Volume Production.png';
import fastTurnaround from '../../assets/images/Fast Turnaround.png';
import qualityControl from '../../assets/images/In-house Quality Control.png';
import precisionMfg from '../../assets/images/Precision Manufacturing.png';
import customOem from '../../assets/images/Custom OEM Solutions.png';
import './AboutCapabilities.css';

const E = [0.22, 1, 0.36, 1];

const capabilities = [
  { img: skilledWorkforce,  title: 'Skilled Workforce' },
  { img: highVolume,        title: 'High Volume Production' },
  { img: fastTurnaround,    title: 'Fast Turnaround' },
  { img: qualityControl,    title: 'In-house Quality Control' },
  { img: precisionMfg,      title: 'Precision Manufacturing' },
  { img: customOem,         title: 'Custom OEM Solutions' },
];

const AboutCapabilities = ({ addRevealRef }) => {
  return (
    <section className="about-capabilities-section" id="export">
      <div className="container about-capabilities-grid">
        <motion.div
          className="capabilities-left"
          initial={{ opacity: 0, x: -48, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: E }}
        >
          <h2 className="capabilities-main-title">Our<br />Capabilities</h2>
          <div className="precision-line"></div>
          <p className="capabilities-main-desc">
            Our capabilities are driven by precision engineering, advanced CNC technology, and efficient
            manufacturing processes, ensuring consistent quality, reliability, and performance in every
            brass component for diverse industrial applications worldwide.
          </p>
        </motion.div>

        <div className="capabilities-right">
          <div className="hex-grid-container">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                className="capability-hex-item"
                initial={{ opacity: 0, y: 32, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: E }}
                whileHover={{ y: -8, scale: 1.04, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="hex-inner-content">
                  <div className="hex-icon-circle">
                    <img src={cap.img} alt={cap.title} />
                  </div>
                  <h4 className="hex-title">{cap.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCapabilities;

