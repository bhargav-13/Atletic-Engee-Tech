import React from 'react';
import { motion } from 'framer-motion';
import swapIcon from '../assets/images/tdesign_swap-right.svg';
import turnedImg from '../assets/images/ISO 90012015 Certified Facility 3.png';
import forgedImg from '../assets/images/ISO 90012015 Certified Facility 2.png';
import millingImg from '../assets/images/ChatGPT Image Mar 28, 2026, 01_17_03 AM 1.png';
import broachImg from '../assets/images/ChatGPT Image Mar 28, 2026, 01_22_13 AM] 1.png';
import stampingImg from '../assets/images/ChatGPT Image Mar 28, 2026, 01_26_33 AM 1.png';
import './ComponentsOval.css';

const productData = [
  { id: 1, title: 'Brass Turned Components', img: turnedImg },
  { id: 2, title: 'Brass Forged component', img: forgedImg },
  { id: 3, title: 'Brass Milling component', img: millingImg },
  { id: 4, title: 'Brass Broach component', img: broachImg },
  { id: 5, title: 'Brass Stamping component', img: stampingImg },
];

const ComponentsOval = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

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
            <h2>Precision Manufacturing, Built<br />for Performance</h2>
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
          className="oval-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {productData.map((product) => (
            <motion.div
              key={product.id}
              className="oval-card"
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="oval-card-header">
                <span className="oval-ring"></span>
                <span className="oval-title">{product.title}</span>
              </div>
              <div className="oval-card-img">
                <img src={product.img} alt={product.title} />
              </div>
              <div className="oval-card-footer">
                <img src={swapIcon} alt="swap" className="oval-swap-icon" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComponentsOval;

