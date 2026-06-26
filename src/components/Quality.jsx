import React from 'react';
import { motion } from 'framer-motion';
import precisionIcon from '../assets/images/file-icons_precision.png';
import './Quality.css';

const Quality = () => {
  const qualityCards = [
    { title: "Precision Inspection at Every Stage", desc: "Every component is carefully inspected throughout the manufacturing process to ensure accuracy, consistency, and defect-free production." },
    { title: "High-Quality Raw Materials", desc: "We use premium-grade brass materials to ensure durability, strength, and long-lasting performance in every product." },
    { title: "Advanced Testing Equipment", desc: "Our facility is equipped with modern testing tools and instruments to verify precision, dimensions, and overall product quality." },
    { title: "Compliance with Global Standards", desc: "All components are manufactured in accordance with international quality standards to meet global industry requirements." },
    { title: "Consistent Batch Production", desc: "We maintain uniformity across all production batches, ensuring consistent quality and performance in every delivery." },
    { title: "Zero-Defect Quality Approach", desc: "Our strict quality control system is designed to minimize defects and deliver flawless components every time." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 36, scale: 0.97 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="section quality-section" id="quality-trust">
      <motion.div
        className="quality-header"
        initial={{ opacity: 0, y: 44, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="quality-header-title">
          <h2>Built for Consistent Performance</h2>
          <div className="quality-underline"></div>
        </div>
        <div className="quality-header-desc">
          <p>
            We ensure every component meets strict quality standards through precision manufacturing, delivering consistent performance, durability, and reliability across all applications.
          </p>
        </div>
      </motion.div>

      <motion.div 
        className="quality-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {qualityCards.map((card, i) => (
          <motion.div 
            key={i} 
            className="quality-card"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.015, boxShadow: '0 24px 48px rgba(0,0,0,0.1)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="quality-icon">
              <img src={precisionIcon} alt="Quality Icon" style={{ width: '18px', height: '18px' }} />
            </div>
            <h4>{card.title}</h4>
            <p>{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Quality;
