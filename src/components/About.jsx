import React from 'react';
import { motion } from 'framer-motion';
import aboutImg1 from '../assets/images/ffbb99c0295e61db0012aa5bd09398178b27f818.jpg';
import aboutImg2 from '../assets/images/6f15857a5bb666551cc51a2a7434e9ea6ee82c6c.jpg';
import AnimatedCounter from './AnimatedCounter';
import useParallax from '../hooks/useParallax';
import './About.css';

const About = () => {
  const addParallax = useParallax(14);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 36, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="section about-section" id="about">
      <motion.div
        className="perf-deliver-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="perf-deliver-title" variants={itemVariants}>
          <h2 className="title-navy">Performance We Deliver</h2>
          <div className="title-underline"></div>
        </motion.div>
        <motion.div className="perf-deliver-desc" variants={itemVariants}>
          <p>
            We deliver precision-engineered brass components using advanced manufacturing processes,
            ensuring consistent quality, reliability, and performance across global industries and
            demanding applications.
          </p>
        </motion.div>
      </motion.div>

      <div className="about-grid new-about">
        <motion.div
          className="about-images"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ overflow: 'hidden', borderRadius: 'inherit' }}>
            <img src={aboutImg1} alt="Brass Components" className="about-img-top" ref={addParallax} />
          </div>
          <div style={{ overflow: 'hidden', borderRadius: 'inherit' }}>
            <img src={aboutImg2} alt="Manufacturing Plant" className="about-img-bottom" ref={addParallax} />
          </div>
        </motion.div>

        <motion.div
          className="about-text-content"
          initial={{ opacity: 0, x: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="about-desc">
            Specializing in precision-engineered brass components, we support industries where accuracy, durability, and performance are non-negotiable. Our expertise spans defense-grade components, EV parts, and industrial fasteners, manufactured using advanced CNC technology and high-quality raw materials.
          </p>

          <div className="progress-bars">
            {[
              { label: 'Defense Component Manufacturing', val: 95 },
              { label: 'EV Precision Parts Development', val: 90 },
              { label: 'Custom Brass Fasteners & Components', val: 85 }
            ].map((item, index) => (
              <div className="progress-item" key={index}>
                <div className="progress-label">
                  <span>{item.label}</span>
                </div>
                <div className="progress-bar-wrapper">
                  <div className="progress-track" style={{ '--fill': `${item.val}%` }}>
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.val}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "circOut", delay: 0.5 + (index * 0.1) }}
                    ></motion.div>
                  </div>
                  <span className="progress-val">{item.val}%</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Flat Stats Bar */}
      <motion.div
        className="flat-stats-bar"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flat-stat-item">
          <h3><AnimatedCounter value={2007} /></h3>
          <p>Established 2007</p>
        </div>
        <div className="flat-stat-item">
          <h3><AnimatedCounter value={300} />+</h3>
          <p>Different Components Delivered</p>
        </div>
        <div className="flat-stat-item">
          <h3><AnimatedCounter value={51} />k+</h3>
          <p>Sq. Ft. Manufacturing Unit</p>
        </div>
        <div className="flat-stat-item">
          <h3><AnimatedCounter value={10} />+</h3>
          <p>Metals Processed</p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
