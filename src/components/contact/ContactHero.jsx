import React from 'react';
import { motion } from 'framer-motion';
import './ContactHero.css';

const ContactHero = () => {
  return (
    <section className="contact-hero-section">
      <div className="contact-hero-content">
        <motion.p
          className="contact-hero-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Inquiry Protocol
        </motion.p>

        <motion.h1
          className="contact-hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Connect with<br />
          <span className="contact-hero-heading-muted">Precision.</span>
        </motion.h1>
      </div>
    </section>
  );
};

export default ContactHero;
