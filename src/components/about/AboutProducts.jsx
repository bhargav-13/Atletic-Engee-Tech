import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { getProductById } from '../../lib/products';
import './AboutProducts.css';

const E = [0.22, 1, 0.36, 1];
const MotionLink = motion.create(Link);

// Real catalogue photos for the showcase: the first one is the large tile.
// Swap any photo number (the digits in IMG_1234) to change what's shown.
const SHOWCASE_IDS = ['1229', '1255', '1264', '1325', '1432'];
const showcase = SHOWCASE_IDS.map(getProductById).filter(Boolean);

const AboutProducts = () => {
  return (
    <section className="about-products-section" id="about-products">
      <div className="container about-products-inner">
        <motion.div
          className="ap-header"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: E }}
        >
          <div>
            <span className="ap-eyebrow">What we make</span>
            <h2 className="about-products-title">Engineered Brass Products</h2>
            <p className="about-products-subtitle">
              Our technical catalogue covers a wide range of precision components,
              each built for high-stress industrial environments.
            </p>
          </div>
          <Link to="/product" className="ap-header-cta">
            Browse catalogue <ArrowRight size={18} />
          </Link>
        </motion.div>

        <div className="ap-showcase">
          {showcase.map((p, i) => (
            <MotionLink
              key={p.id}
              to={`/product/${p.id}`}
              className={`ap-tile ${i === 0 ? 'ap-tile--lg' : ''}`}
              aria-label="View this product"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: E }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={p.image} alt="" loading="lazy" decoding="async" />
              <span className="ap-tile-arrow" aria-hidden="true">
                <ArrowUpRight size={i === 0 ? 22 : 18} />
              </span>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProducts;
