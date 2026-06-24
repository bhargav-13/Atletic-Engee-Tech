import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactMain from '../components/contact/ContactMain';

const ContactPage = () => {
  return (
    <div className="contact-page" style={{ paddingTop: 0 }}>
      <ContactHero />
      <ContactMain />
    </div>
  );
};

export default ContactPage;
