import React from 'react';
import { motion } from 'framer-motion';
import '../product/ProductGrid.css';
import './RelatedProducts.css';
import swapIcon from '../../assets/images/tdesign_swap-right.svg';

const E = [0.22, 1, 0.36, 1];

const RelatedProducts = ({ products, addRevealRef }) => {
  return (
    <section className="related-products-section">
      <motion.div
        className="comp-header"
        initial={{ opacity: 0, y: 36, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: E }}
      >
        <div className="comp-title">
          <h2>Built for Consistent Performance</h2>
          <div className="comp-underline"></div>
        </div>
        <div className="comp-desc">
          <p>We ensure every component meets strict quality standards through precision manufacturing, delivering consistent performance, durability, and reliability across all selections.</p>
        </div>
      </motion.div>

      <div className="product-grid">
        {products.map((item, idx) => (
          <motion.div
            key={idx}
            className="product-card"
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.75, delay: (idx % 3) * 0.1, ease: E }}
            whileHover={{ y: -8, scale: 1.015, boxShadow: '0 24px 48px rgba(0,0,0,0.1)' }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="product-card-header">
              <span className="product-ring"></span>
              <span className="product-title">{item.title}</span>
            </div>
            <div className="product-card-img">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="product-card-footer">
              <img src={swapIcon} alt="swap" className="swap-icon" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
