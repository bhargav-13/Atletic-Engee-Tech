import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import './ContactMain.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const ContactMain = () => {
  const [form, setForm] = useState({
    firstName: '', lastName: '', contact: '', email: '', subject: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── CONTACT SECTION ── */}
      <section className="contact-body-section">
        {/* Watermark — sits in upper portion of section */}
        <span className="contact-watermark" aria-hidden="true">CONTACT</span>

        <div className="contact-body-inner">

          {/* LEFT */}
          <motion.div className="contact-left" {...fadeUp(0)}>
            <h2 className="contact-left-heading">Chat with the<br />team</h2>
            <p className="contact-left-sub">Feel free reach out – we'd love to connect</p>

            {/* Email + Phone row */}
            <div className="contact-info-row">
              <div className="contact-info-group">
                <div className="contact-info-group-header">
                  <Mail size={26} strokeWidth={1.5} />
                  <span>Email us</span>
                </div>
                <ul>
                  <li><a href="mailto:info@atleticengeetech.com">info@atleticengeetech.com</a></li>
                  <li><a href="mailto:sales@atleticengeetech.com">sales@atleticengeetech.com</a></li>
                  <li><a href="mailto:quality@atleticengeetech.com">quality@atleticengeetech.com</a></li>
                </ul>
              </div>

              <div className="contact-info-group">
                <div className="contact-info-group-header">
                  <Phone size={26} strokeWidth={1.5} />
                  <span>Contact</span>
                </div>
                <ul>
                  <li><a href="tel:+919824583526">+91 98245 83526</a></li>
                  <li><a href="tel:+912886452376">+91 – 288 – 6452376</a></li>
                </ul>
              </div>
            </div>

            {/* Address full-width */}
            <div className="contact-info-group">
              <div className="contact-info-group-header">
                <MapPin size={26} strokeWidth={1.5} />
                <span>Address</span>
              </div>
              <ul>
                <li>Unity Gate, Nilgiri, Shree Ram Industrial Park,<br />Plot No. 90 To 101, Dared, Jamnagar, Gujarat 361004</li>
              </ul>
            </div>
          </motion.div>

          {/* RIGHT — Form Card */}
          <motion.div className="contact-form-card" {...fadeUp(0.15)}>
            {submitted ? (
              <div className="contact-success">
                <h3>Message Sent</h3>
                <p>Thank you for reaching out. Our team will get back to you within 24 business hours.</p>
                <button
                  className="contact-reset-btn"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ firstName: '', lastName: '', contact: '', email: '', subject: '', message: '' });
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name<span>*</span></label>
                    <input id="firstName" name="firstName" type="text" value={form.firstName} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name<span>*</span></label>
                    <input id="lastName" name="lastName" type="text" value={form.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact">Contact<span>*</span></label>
                    <input id="contact" name="contact" type="tel" value={form.contact} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email<span>*</span></label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject<span>*</span></label>
                  <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message<span>*</span></label>
                  <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} required />
                </div>

                <div className="contact-form-footer">
                  <button type="submit" className="contact-submit-btn">Send Message</button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── MAP SECTION ── */}
      <section className="contact-map-section">
        <motion.div className="contact-map-header" {...fadeUp(0)}>
          <h2 className="contact-map-heading">Get Location</h2>
        </motion.div>

        <motion.div className="contact-map-wrapper" {...fadeUp(0.1)}>
          <iframe
            title="Atletic Engee Tech Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.3!2d70.06!3d22.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c9e4f0b1e1a1%3A0x1234567890abcdef!2sDared%2C%20Jamnagar%2C%20Gujarat%20361004!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>
    </>
  );
};

export default ContactMain;
