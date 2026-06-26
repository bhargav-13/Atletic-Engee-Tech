import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import footerLogo from '../assets/images/Atletic logo bg remove 2.svg';
import { E, stagger, staggerItem } from '../lib/animations';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.9, ease: E }}
    >
      <div className="footer-container">
        <div className="footer-grid">

          {/* ROW 1: Navigation & Info */}
          <motion.div
            className="footer-nav-group footer-group-1-nav"
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="footer-col" variants={staggerItem}>
              <h4>PAGES</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="#categories">Categories</a></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </motion.div>
            <motion.div className="footer-col" variants={staggerItem}>
              <h4>INDUSTRY</h4>
              <ul>
                <li><a href="#defence">Defence</a></li>
                <li><a href="#ev-parts">EV Parts</a></li>
                <li><a href="#fastener">Fastener</a></li>
                <li><a href="#automotive">Automotive</a></li>
                <li><a href="#electrical">Electrical</a></li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="footer-nav-group footer-group-2-nav"
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="footer-col" style={{marginLeft: '2rem'}} variants={staggerItem}>
              <h4>ATLETIC</h4>
              <ul>
                <li><a href="#certificates">Certificates</a></li>
                <li><Link to="/quality">Quality</Link></li>
                <li><a href="#export">Export</a></li>
                <li><a href="#process">Process</a></li>
              </ul>
            </motion.div>
            <motion.div className="footer-col" variants={staggerItem}>
              <h4>PRODUCTS</h4>
              <ul>
                <li><a href="#brass-turned">Brass Turned Component</a></li>
                <li><a href="#brass-forged">Brass Forged Component</a></li>
                <li><a href="#brass-milling">Brass Milling Component</a></li>
                <li><a href="#brass-broach">Brass Broach Component</a></li>
                <li><a href="#brass-stamping">Brass Stamping Component</a></li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="footer-info-group"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: E }}
          >
            <img src={footerLogo} alt="Atletic Logo" className="footer-logo" />
            <div className="logo-divider"></div>
            <p className="footer-contact">+91 98245 83526</p>
            <p className="footer-email">info@atleticengeetech</p>
          </motion.div>

          {/* ROW 2: Social */}
          <div className="footer-social-group footer-group-1-social">
            <div className="footer-divider"></div>
            <div className="footer-social">
              <span className="social-name">Facebook</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </div>
          </div>

          <div className="footer-social-group footer-group-2-social">
            <div className="footer-divider"></div>
            <div className="footer-social" style={{marginLeft: '2rem'}}>
              <span className="social-name">Whatsapp</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
              </svg>
            </div>
          </div>

          {/* ROW 3: Bottom Elements */}
          <div className="footer-copyright-wrap">
            <div className="footer-bottom-content">
              <p className="copyright">© 2026 — All Copyrights reserved for Atletic Engee Tech</p>
              <p className="developer-tag">
                Designed and developed with <Heart size={14} className="heart-icon" fill="currentColor" /> by <a href="https://codelixitsolutions.com" target="_blank" rel="noopener noreferrer" className="codelix-link">Codelix</a>
              </p>
            </div>
          </div>

          <div className="footer-back-to-top-wrap">
            <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
              <ArrowUp size={20} />
            </button>
          </div>

        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
