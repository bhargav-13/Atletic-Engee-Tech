import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Hammer, Cog, Wrench } from 'lucide-react';
import turnedImg from '../../assets/images/Turned Components.png';
import './AboutProducts.css';

const E = [0.22, 1, 0.36, 1];
const CARD_HOVER = {
  whileHover: { y: -8, scale: 1.015, boxShadow: '0 24px 48px rgba(0,0,0,0.1)' },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.35, ease: E },
};

const AboutProducts = ({ addRevealRef }) => {
  return (
    <section className="about-products-section" id="about-products">
      <div className="container about-products-inner">
        <motion.div
          className="about-products-header"
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: E }}
        >
          <h2 className="about-products-title">ENGINEERED BRASS PRODUCTS</h2>
          <p className="about-products-subtitle">
            Our technical catalog encompasses over 300 unique components, each forged for high-stress industrial environments.
          </p>
        </motion.div>

        <div className="products-grid-layout">
          {/* Main Featured Card */}
          <motion.div
            className="product-card-featured"
            initial={{ opacity: 0, x: -48, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: E }}
            {...CARD_HOVER}
          >
            <div className="featured-card-image">
              <img src={turnedImg} alt="Turned Components" />
              <div className="featured-card-overlay"></div>
            </div>
            <div className="featured-card-content">
              <h3>Turned Components</h3>
              <p>Precision lathing for aerospace-grade circular connectors and structural fasteners.</p>
            </div>
            <div className="featured-card-footer">
              <div className="arrow-icon-box">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </motion.div>

          {/* Right Cards Stack */}
          <div className="products-right-stack">
            <div className="products-top-row">
              <motion.div
                className="product-card-small"
                initial={{ opacity: 0, x: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.75, delay: 0.1, ease: E }}
                {...CARD_HOVER}
              >
                <h3 className="small-card-title">FORGED PARTS</h3>
                <div className="small-card-icon"><Hammer size={18} strokeWidth={1.5} /></div>
              </motion.div>
              <motion.div
                className="product-card-small"
                initial={{ opacity: 0, x: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.75, delay: 0.2, ease: E }}
                {...CARD_HOVER}
              >
                <h3 className="small-card-title">MILLING</h3>
                <div className="small-card-icon"><Cog size={18} strokeWidth={1.5} /></div>
              </motion.div>
            </div>

            <motion.div
              className="product-card-wide"
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.75, delay: 0.3, ease: E }}
              {...CARD_HOVER}
            >
              <h3 className="small-card-title">BROACH COMPONENTS</h3>
              <div className="small-card-icon"><Wrench size={18} strokeWidth={1.5} /></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProducts;
