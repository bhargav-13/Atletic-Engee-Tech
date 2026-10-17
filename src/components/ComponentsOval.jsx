import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { hoverLift } from '../lib/animations';
import { ArrowUpRight } from 'lucide-react';
import { getProductById } from '../lib/products';
import ProductCard from './product/ProductCard';
import './ComponentsOval.css';

// Hand-picked real catalogue photos shown on the home page.
// Swap any photo number (the digits in IMG_1234) to change what's featured.
const FEATURED_IDS = ['1225', '1232', '1258', '1398', '1358', '1442', '1376'];
const featured = FEATURED_IDS.map(getProductById).filter(Boolean);

// Small fanned photo stack on the catalogue card
const STACK_IDS = ['1291', '1366', '1405'];
const stack = STACK_IDS.map(getProductById).filter(Boolean);

const MotionLink = motion.create(Link);

const ComponentsOval = () => {
  return (
    <section className="section components-oval-section" id="oval-components">
      <div className="components-oval-content">
        <motion.div
          className="comp-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="comp-title">
            <h2 className="comp-title-balanced">Precision Manufacturing,<br />Built for Performance</h2>
            <div className="comp-underline"></div>
          </div>
          <div className="comp-desc">
            <p>
              We use advanced CNC machining and automated processes to ensure high precision.
              Strict quality control guarantees consistent and reliable brass components.
              Built to meet global standards for defense, EV, and industrial applications.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="product-catalog-grid oval-featured-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}

          {/* Last slot: leads into the full photo catalogue */}
          <MotionLink
            to="/product"
            className="featured-catalog-card"
            aria-label="Explore the full product catalogue"
            {...hoverLift}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="fc-stack" aria-hidden="true">
              {stack.map((p) => (
                <img key={p.id} src={p.image} alt="" loading="lazy" />
              ))}
            </div>
            <div className="fc-body">
              <span className="fc-eyebrow">Full Catalogue</span>
              <h3>Explore every part we make</h3>
            </div>
            <span className="fc-arrow" aria-hidden="true">
              <ArrowUpRight size={22} strokeWidth={2} />
            </span>
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
};

export default ComponentsOval;
