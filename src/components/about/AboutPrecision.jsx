import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BatteryCharging, Globe } from 'lucide-react';
import './AboutPrecision.css';

const industryFocus = [
  {
    icon: <Shield size={32} strokeWidth={1.5} />,
    title: 'DEFENSE ENGINEERING',
    desc: 'Components designed for extreme environmental resistance and absolute reliability in tactical applications.'
  },
  {
    icon: <BatteryCharging size={32} strokeWidth={1.5} />,
    title: 'EV SYSTEMS',
    desc: 'High-conductivity brass connectors and fasteners optimized for next-generation electric vehicle architecture.'
  },
  {
    icon: <Globe size={32} strokeWidth={1.5} />,
    title: 'AEROSPACE & NAVAL',
    desc: 'Precision components meeting stringent technical standards for maritime and aerospace operational success.'
  }
];

const AboutPrecision = ({ addRevealRef }) => {
  return (
    <section className="section about-precision-section" id="about-precision">
      <div className="container about-precision-grid">
        <div className="about-precision-left reveal reveal-left" ref={addRevealRef}>
          <h2 className="precision-title">Precision Brass Manufacturing for Critical Industries</h2>
          <div className="precision-line"></div>
          <p className="precision-main-desc">
            Atlantic Engee Tech stands at the intersection of traditional metallurgy and futuristic engineering.
            Our focus on specialized brass components serves the world's most demanding sectors—from high-voltage
            EV components to mission-critical defense fasteners.
          </p>
        </div>

        <div className="about-precision-right">
          <div className="precision-cards-row">
            {industryFocus.map((item, i) => (
              <motion.div
                key={i}
                className={`industry-focus-card reveal reveal-up delay-${i + 1}`}
                ref={addRevealRef}
                whileHover={{ y: -8, scale: 1.015, boxShadow: '0 24px 48px rgba(0,0,0,0.1)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="focus-card-icon">{item.icon}</div>
                <h3 className="focus-card-title">{item.title}</h3>
                <p className="focus-card-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPrecision;
