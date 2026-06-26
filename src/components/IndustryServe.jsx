import React from 'react';
import { motion } from 'framer-motion';
import './IndustryServe.css';

import tankIcon from '../assets/images/game-icons_tank.svg';
import evIcon from '../assets/images/bi_ev-front.svg';
import electricalIcon from '../assets/images/game-icons_electrical-resistance.svg';
import fastenersIcon from '../assets/images/fasteners 1.svg';
import automotiveIcon from '../assets/images/carbon_ibm-elo-automotive-compliance.svg';
import gasIcon from '../assets/images/fluent_gas-propane-16-regular.svg';

const industries = [
  { title: 'GAS', description: 'High-quality brass components designed for gas applications, ensuring leak-proof performance, durability, and compliance with strict safety standards.', icon: gasIcon },
  { title: 'EV PARTS', description: 'Precision brass components designed for electric vehicles, ensuring high conductivity, efficiency, and reliable performance in advanced mobility systems.', icon: evIcon },
  { title: 'ELECTRICAL', description: 'High-performance brass electrical parts engineered for superior conductivity, safety, and consistent performance across diverse electrical applications.', icon: electricalIcon },
  { title: 'DEFENCE COMPONENTS', description: 'High-precision brass components engineered for mission-critical defense applications, ensuring strength, reliability, and consistent performance under extreme conditions.', icon: tankIcon },
  { title: 'FASTENERS', description: 'Durable brass fasteners engineered for secure fastening, corrosion resistance, and long-lasting performance across industrial and mechanical applications.', icon: fastenersIcon },
  { title: 'AUTOMOTIVE', description: 'Precision-engineered brass components designed for automotive systems, ensuring durability, efficiency, and consistent performance across demanding vehicle applications.', icon: automotiveIcon },
];

const E = [0.22, 1, 0.36, 1];

const IndustryServe = () => (
  <section className="section industry-section" id="industries">
    <div className="industry-content-container">

      <motion.div
        className="industry-header-flex"
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: E }}
      >
        <div className="header-left">
          <h2>Industries We Power</h2>
          <div className="header-underline"></div>
        </div>
        <div className="header-right">
          <p>
            Delivering precision-engineered brass components across defense, EV, electrical,
            and industrial sectors, ensuring performance, reliability, and compliance with
            global standards for demanding applications.
          </p>
        </div>
      </motion.div>

      <div className="industry-cards-grid">
        {industries.map((industry, i) => (
          <motion.div
            key={industry.title}
            className="industry-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: E }}
            whileHover={{ y: -6, boxShadow: '0 20px 44px rgba(0,0,0,0.12)', transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] } }}
          >
            <div className="card-bar" />
            <div className="card-body">
              <div className="ind-header-row">
                <div className="ind-icon-box">
                  <img src={industry.icon} alt={industry.title} />
                </div>
                <h3 className="ind-title">{industry.title}</h3>
              </div>
              <p className="ind-description">{industry.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default IndustryServe;
