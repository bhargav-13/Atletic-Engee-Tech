import React from 'react';
import { motion } from 'framer-motion';
import './QualityHero.css';
import { E } from '../../lib/animations';
import productImg from '../../assets/images/product image.png';

const QualityHero = () => {
  return (
    <section className="quality-hero">
      <div className="container">
        <div className="quality-hero-layout">
          <div className="quality-hero-text">
            <motion.span
              className="hero-top-label"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: E }}
            >
              METROLOGY STANDARDS
            </motion.span>

            <div style={{ overflow: 'hidden' }}>
              <motion.h1
                className="quality-hero-main-title"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.1, ease: E }}
              >
                Precision Instrumentation Hub
              </motion.h1>
            </div>

            <motion.p
              className="quality-hero-desc"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: E }}
            >
              Every component is machined at Precision. Metrology protocols are
              rigorous with a clean, high-precision environment of high-tolerance
              instruments. Robust, cost-engineering optics.
            </motion.p>
          </div>

          <motion.div
            className="quality-hero-right"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: E }}
          >
            <div className="quality-hero-img-wrap">
              <img src={productImg} alt="Brass Components" className="quality-hero-product-img" />
            </div>
            <div className="quality-hero-stat">
              <div className="accuracy-label">±0.001mm</div>
              <div className="accuracy-sub">BASELINE ACCURACY THRESHOLD</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QualityHero;
