import React, { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, ChevronRight, User, Building2, Mail, Phone, Globe,
  MessageSquare, ShieldCheck, ScanSearch, Clock, CircleCheck, ZoomIn,
} from 'lucide-react';
import { getProductById, getAdjacent } from '../lib/products';
import ProductCard from '../components/product/ProductCard';
import './ProductEnquiry.css';

const E = [0.22, 1, 0.36, 1];

const EMPTY_FORM = { name: '', company: '', email: '', contact: '', country: '', message: '' };

const FIELDS = [
  { name: 'name',    label: 'Name',        type: 'text',  icon: User,      autoComplete: 'name' },
  { name: 'company', label: 'Company',     type: 'text',  icon: Building2, autoComplete: 'organization' },
  { name: 'email',   label: 'Mail',        type: 'email', icon: Mail,      autoComplete: 'email' },
  { name: 'contact', label: 'Contact No.', type: 'tel',   icon: Phone,     autoComplete: 'tel' },
  { name: 'country', label: 'Country',     type: 'text',  icon: Globe,     autoComplete: 'country-name', wide: true },
];

const TRUST = [
  { icon: ShieldCheck, title: 'ISO 9001:2015', text: 'Certified facility' },
  { icon: ScanSearch,  title: 'In-house QC',   text: 'Inspected before dispatch' },
  { icon: Clock,       title: '24 hr reply',   text: 'On business days' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: E },
});

/* Product photo with a hover magnifier: the image scales up around the cursor */
const ZoomStage = ({ product }) => {
  const [zoom, setZoom] = useState(null);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setZoom({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };

  return (
    <div
      className={`pe-stage ${zoom ? 'is-zoomed' : ''}`}
      onMouseMove={onMove}
      onMouseLeave={() => setZoom(null)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={product.id}
          src={product.image}
          alt={`Product ${product.ref}`}
          style={zoom ? { transformOrigin: `${zoom.x}% ${zoom.y}%` } : undefined}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: E }}
        />
      </AnimatePresence>
      <span className="pe-ref-badge">REF · {product.ref}</span>
      <span className="pe-zoom-hint"><ZoomIn size={15} /> Hover to zoom</span>
    </div>
  );
};

const ProductEnquiry = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setForm(EMPTY_FORM);
    setSubmitted(false);
  }, [id]);

  if (!product) return <Navigate to="/product" replace />;

  const { prev, next, more } = getAdjacent(product.id);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send { product: product.ref, ...form } to the backend / email service
    setSubmitted(true);
  };

  return (
    <div className="pe-page">
      {/* class names avoid "-section": responsive.css forces padding on those */}
      <section className="pe-hero">
        <span className="pe-watermark" aria-hidden="true">ENQUIRY</span>

        {/* Breadcrumb + previous / next product */}
        <motion.div className="pe-topbar" {...fadeUp(0)}>
          <nav className="pe-crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/product">Products</Link>
            <ChevronRight size={14} />
            <span aria-current="page">{product.ref}</span>
          </nav>
          <div className="pe-stepper">
            <Link to={`/product/${prev.id}`} className="pe-step" aria-label="Previous product">
              <ArrowLeft size={17} />
            </Link>
            <Link to={`/product/${next.id}`} className="pe-step" aria-label="Next product">
              <ArrowRight size={17} />
            </Link>
          </div>
        </motion.div>

        <div className="pe-grid">
          {/* LEFT: product photo + trust points */}
          <motion.div className="pe-media" {...fadeUp(0.08)}>
            <ZoomStage product={product} />
            <ul className="pe-trust">
              {TRUST.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <span className="pe-trust-icon"><Icon size={20} strokeWidth={1.6} /></span>
                  <span>
                    <strong>{title}</strong>
                    <small>{text}</small>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT: enquiry form */}
          <motion.div className="pe-card" {...fadeUp(0.16)}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="done"
                  className="pe-success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: E }}
                >
                  <span className="pe-success-icon"><CircleCheck size={40} strokeWidth={1.5} /></span>
                  <h2>Enquiry sent</h2>
                  <p>
                    Thank you for your interest in <strong>{product.ref}</strong>.
                    Our team will get back to you within 24 business hours.
                  </p>
                  <div className="pe-success-actions">
                    <button
                      type="button"
                      className="pe-btn-ghost"
                      onClick={() => { setSubmitted(false); setForm(EMPTY_FORM); }}
                    >
                      Send another enquiry
                    </button>
                    <Link to="/product" className="pe-btn-link">
                      Browse products <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="pe-eyebrow">Product Enquiry</span>
                  <h1 className="pe-title">Request a Quote</h1>
                  <p className="pe-lead">
                    Share your quantity, material or drawing requirements and our
                    engineering team will get back to you.
                  </p>

                  <div className="pe-selected">
                    <img src={product.image} alt="" />
                    <span>
                      <small>Selected product</small>
                      <strong>{product.ref}</strong>
                    </span>
                  </div>

                  <form className="pe-form" onSubmit={handleSubmit}>
                    {FIELDS.map(({ name, label, type, icon: Icon, autoComplete, wide }) => (
                      <label key={name} className={`pe-field ${wide ? 'pe-field--wide' : ''}`}>
                        <span className="pe-label">{label}<em>*</em></span>
                        <span className="pe-input">
                          <Icon size={17} strokeWidth={1.7} />
                          <input
                            name={name}
                            type={type}
                            autoComplete={autoComplete}
                            value={form[name]}
                            onChange={handleChange}
                            required
                          />
                        </span>
                      </label>
                    ))}

                    <label className="pe-field pe-field--wide">
                      <span className="pe-label">Message<em>*</em></span>
                      <span className="pe-input pe-input--area">
                        <MessageSquare size={17} strokeWidth={1.7} />
                        <textarea
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Quantity, material, finish, drawings…"
                          required
                        />
                      </span>
                    </label>

                    <button type="submit" className="pe-submit">
                      <span>Send Enquiry</span>
                      <ArrowRight size={18} />
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* More products */}
      <section className="pe-more">
        <div className="pe-more-head">
          <div>
            <span className="pe-eyebrow">Keep exploring</span>
            <h2 className="pe-more-title">More products</h2>
          </div>
          <Link to="/product" className="pe-btn-link">
            View all products <ArrowRight size={16} />
          </Link>
        </div>
        <div className="pe-more-grid">
          {more.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductEnquiry;
