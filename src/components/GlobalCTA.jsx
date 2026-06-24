import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import mapSvg from '../assets/images/map-base 1.svg';
import './GlobalCTA.css';
import MagneticButton from './MagneticButton';

const GlobalCTA = () => {
  return (
    <section className="section global-cta-section" id="contact-map">
      <motion.div 
        className="global-cta-header comp-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="comp-title">
          <h2>Serving Global Markets</h2>
          <div className="comp-underline"></div>
        </div>
        <div className="comp-desc">
          <p>Serving clients worldwide with precision-engineered brass components, ensuring consistent quality, reliable delivery, and compliance with international standards across industries.</p>
        </div>
      </motion.div>

      <motion.div 
        className="global-map-container"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img src={mapSvg} alt="Global Operations Map" className="world-map-img" />
      </motion.div>

      <div className="global-cta-footer">
        <motion.div 
          className="global-cta-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>Partner with us for high-quality manufacturing, consistent performance, and on-time delivery across global markets.</p>
          <MagneticButton>
            <Link to="/contact" className="btn-explore" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Contact Now
            </Link>
          </MagneticButton>
        </motion.div>
        
        <motion.div 
          className="global-flags"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img src="https://flagcdn.com/w320/us.png" alt="USA" />
          <img src="https://flagcdn.com/w320/de.png" alt="Germany" />
          <img src="https://flagcdn.com/w320/pe.png" alt="Peru" />
          <img src="https://flagcdn.com/w320/br.png" alt="Brazil" />
          <img src="https://flagcdn.com/w320/il.png" alt="Israel" />
          <img src="https://flagcdn.com/w320/es.png" alt="Spain" />
          <img src="https://flagcdn.com/w320/it.png" alt="Italy" />
          <div className="flag-placeholder"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalCTA;
