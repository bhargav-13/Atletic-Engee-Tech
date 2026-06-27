import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AdvancedPreloader.css';
import logo from '../assets/images/Atletic logo bg remove 2.svg';

const AdvancedPreloader = ({ onFinish }) => {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Total preloader duration
    const timer = setTimeout(() => {
      setComplete(true);

      // Cleanup after exit animation
      setTimeout(() => {
        if (onFinish) onFinish();
        document.body.style.overflow = 'auto';
      }, 1200);
    }, 2800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, [onFinish]);

  return (
    <div className="advanced-preloader">
      <AnimatePresence mode="wait">
        {!complete && (
          <motion.div
            key="logo-content"
            className="logo-content-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
            transition={{ duration: 0.6 }}
          >
            <div className="logo-box">
              <motion.img
                src={logo}
                alt="Atlantic Logo"
                className="intro-logo"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="branding-line">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  ATLANTIC ENGEE TECH
                </motion.span>
              </div>
            </div>

            <div className="linear-loader-box">
              <motion.div
                className="linear-progress"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2.2, ease: [0.65, 0, 0.35, 1] }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sliding Doors Exit Animation */}
      <div className="exit-doors">
        <motion.div
          className="door-panel panel-left"
          initial={{ x: 0 }}
          animate={complete ? { x: "-100%" } : { x: 0 }}
          transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
        />
        <motion.div
          className="door-panel panel-right"
          initial={{ x: 0 }}
          animate={complete ? { x: "100%" } : { x: 0 }}
          transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
        />
      </div>
    </div>
  );
};

export default AdvancedPreloader;
