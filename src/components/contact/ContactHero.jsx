import React from 'react';
import { motion } from 'framer-motion';
import { E } from '../../lib/animations';
import './ContactHero.css';

const ContactHero = () => {
  return (
    <section className="contact-hero-section">
      <div className="contact-hero-content">
        <motion.p
          className="contact-hero-eyebrow"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: E }}
        >
          Inquiry Protocol
        </motion.p>

        <motion.h1
          className="contact-hero-heading"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
        >
          {['Connect with', <span key="muted" className="contact-hero-heading-muted">Precision.</span>].map((line, i) => (
            <div key={i} style={{ overflow: 'hidden', display: 'block' }}>
              <motion.span
                style={{ display: 'block' }}
                variants={{
                  hidden: { y: '100%', opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.95, ease: E } },
                }}
              >
                {line}
              </motion.span>
            </div>
          ))}
        </motion.h1>
      </div>
    </section>
  );
};

export default ContactHero;
