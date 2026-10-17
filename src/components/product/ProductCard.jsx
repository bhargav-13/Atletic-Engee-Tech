import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { hoverLift } from '../../lib/animations';
import './ProductGrid.css';

import swapIcon from '../../assets/images/tdesign_swap-right.svg';

const MotionLink = motion.create(Link);

const ProductCard = ({ product, index = 0 }) => (
  <MotionLink
    to={`/product/${product.id}`}
    className="product-card product-card--image-only"
    style={{ textDecoration: 'none', color: 'inherit' }}
    aria-label={`Enquire about product ${product.ref}`}
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay: (index % 8) * 0.04, ease: [0.22, 1, 0.36, 1] }}
    {...hoverLift}
  >
    <div className="product-card-img">
      <img src={product.image} alt={`Product ${product.ref}`} loading="lazy" decoding="async" />
    </div>
    <div className="catalog-overlay" aria-hidden="true">
      <span className="catalog-cta">Enquire Now</span>
    </div>
    <div className="catalog-chip" aria-hidden="true">
      <img src={swapIcon} alt="" />
    </div>
  </MotionLink>
);

export default ProductCard;
