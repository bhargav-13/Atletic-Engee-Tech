import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className, delay = 0, y = 40, scale = 0.97 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
