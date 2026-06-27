import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/images/Atletic logo 1.svg';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSpecialPage = location.pathname === '/quality' || location.pathname.startsWith('/product') || location.pathname === '/contact';

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Product', path: '/product' },
    { name: 'Quality', path: '/quality' },
  ];

  return (
    <nav className={`navbar ${isSpecialPage ? 'navbar-quality' : ''}`}>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logoImg} alt="Atlantic Engee Tech Logo" />
          <span className="logo-text">Atlantic Engee Tech</span>
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="nav-links">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={location.pathname === link.path ? 'active' : ''}
          >
            {link.name}
          </Link>
        ))}
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
      </div>

      <button
        className={`mobile-toggle ${isMenuOpen ? 'open' : ''}`}
        aria-label="Menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="mobile-menu-content">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link
                    to={link.path}
                    className={location.pathname === link.path ? 'active' : ''}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/contact" className="nav-cta" onClick={() => setIsMenuOpen(false)}>Contact Now</Link>
              </motion.div>

              <motion.div
                className="mobile-menu-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span className="mobile-menu-contact">GET IN TOUCH</span>
                <p className="mobile-menu-detail">info@atleticengeetech.com</p>
                <p className="mobile-menu-detail">+91 98765 43210</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
