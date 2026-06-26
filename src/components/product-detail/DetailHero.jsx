import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './DetailHero.css';

const E = [0.22, 1, 0.36, 1];

const DetailHero = ({ product, addRevealRef }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="detail-hero-section">
      <div className="detail-container">
        <motion.div
          className="gallery-column"
          initial={{ opacity: 0, x: -48, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: E }}
        >
          <div className="main-image-box">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIdx}
                src={product.gallery[activeIdx]}
                alt={product.title}
                initial={{ opacity: 0, scale: 1.04, filter: 'blur(6px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.97, filter: 'blur(4px)' }}
                transition={{ duration: 0.45, ease: E }}
              />
            </AnimatePresence>
          </div>
          <div className="thumbnail-row">
            {product.gallery.map((img, idx) => (
              <motion.div
                key={idx}
                className={`thumb-box ${activeIdx === idx ? 'active' : ''}`}
                onClick={() => setActiveIdx(idx)}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.25, ease: E }}
              >
                <img src={img} alt={`Thumbnail ${idx}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="info-column"
          initial={{ opacity: 0, x: 48, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: E }}
        >
          <motion.span
            className="category-badge"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: E }}
          >
            {product.category}
          </motion.span>
          <motion.h1
            className="product-detail-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: E }}
          >
            {product.title}
          </motion.h1>
          <motion.p
            className="product-detail-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: E }}
          >
            {product.description}
          </motion.p>

          <motion.div
            className="info-footer"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: E }}
          >
            <div className="footer-line"></div>
            <span className="metadata">DEVELOPED FOR {product.sector}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailHero;
