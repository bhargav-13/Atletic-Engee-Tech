import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';
import logo from '../assets/images/Atletic logo bg remove 2.svg';

const Preloader = ({ onFinish }) => {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setComplete(true);
      setTimeout(() => {
        if (onFinish) onFinish();
        document.body.style.overflow = 'auto';
      }, 800); // Wait for exit animation
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, [onFinish]);

  return (
    <motion.div
      className="preloader-overlay"
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100%',
        transition: { 
          duration: 0.8, 
          ease: [0.76, 0, 0.24, 1] 
        } 
      }}
    >
      <div className="preloader-content">
        <motion.div
          className="logo-container"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src={logo} alt="Atlantic Logo" className="preloader-logo" />
        </motion.div>
        
        <motion.div 
          className="preloader-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="brand-name">ATLANTIC ENGEE TECH</div>
          <div className="tagline">Precision Engineering & Manufacturing</div>
        </motion.div>

        <div className="loading-container">
          <motion.div 
            className="loading-bar"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </div>
        
        <motion.div 
          className="counter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <LoadingCounter />
        </motion.div>
      </div>
      
      {/* Dynamic Background Panels for Premium Feel */}
      <motion.div 
        className="bg-panel" 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: "circOut" }}
      />
    </motion.div>
  );
};

const LoadingCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 15);
    return () => clearInterval(interval);
  }, []);

  return <span>{count}%</span>;
};

export default Preloader;
