import React from 'react';
import { motion } from 'framer-motion';

// Fade + short rise only. Blur/scale on a whole page is expensive to paint,
// and a leftover filter/transform on this wrapper breaks position:sticky
// (e.g. the enquiry page's photo column) inside it.
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
      exit={{ opacity: 0, y: -10, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
