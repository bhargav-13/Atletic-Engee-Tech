import React from 'react';
import skilledWorkforce from '../../assets/images/Skilled Workforce.png';
import highVolume from '../../assets/images/High Volume Production.png';
import fastTurnaround from '../../assets/images/Fast Turnaround.png';
import qualityControl from '../../assets/images/In-house Quality Control.png';
import precisionMfg from '../../assets/images/Precision Manufacturing.png';
import customOem from '../../assets/images/Custom OEM Solutions.png';
import './AboutCapabilities.css';

const capabilities = [
  { img: skilledWorkforce,  title: 'Skilled Workforce' },
  { img: highVolume,        title: 'High Volume Production' },
  { img: fastTurnaround,    title: 'Fast Turnaround' },
  { img: qualityControl,    title: 'In-house Quality Control' },
  { img: precisionMfg,      title: 'Precision Manufacturing' },
  { img: customOem,         title: 'Custom OEM Solutions' },
];

const AboutCapabilities = ({ addRevealRef }) => {
  return (
    <section className="about-capabilities-section" id="about-capabilities">
      <div className="container about-capabilities-grid">
        <div className="capabilities-left reveal reveal-left" ref={addRevealRef}>
          <h2 className="capabilities-main-title">Our<br />Capabilities</h2>
          <div className="precision-line"></div>
          <p className="capabilities-main-desc">
            Our capabilities are driven by precision engineering, advanced CNC technology, and efficient
            manufacturing processes, ensuring consistent quality, reliability, and performance in every
            brass component for diverse industrial applications worldwide.
          </p>
        </div>

        <div className="capabilities-right">
          <div className="hex-grid-container">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className={`capability-hex-item reveal reveal-up delay-${(i % 3) + 1}`}
                ref={addRevealRef}
              >
                <div className="hex-inner-content">
                  <div className="hex-icon-circle">
                    <img src={cap.img} alt={cap.title} />
                  </div>
                  <h4 className="hex-title">{cap.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCapabilities;

