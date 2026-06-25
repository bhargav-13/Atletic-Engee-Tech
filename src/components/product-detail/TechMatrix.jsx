import React from 'react';
import './TechMatrix.css';

const TechMatrix = ({ specs, addRevealRef }) => {
  return (
    <section className="tech-matrix-section">
      <div className="matrix-header">
        <h2 className="matrix-heading">Technical Matrix</h2>
        <span className="spec-sheet-version">SPEC SHEET V4.02</span>
      </div>
      <div className="matrix-grid">
        {specs.map((spec, idx) => (
          <div key={idx} className="matrix-item reveal reveal-up" ref={addRevealRef} style={{ transitionDelay: `${idx * 0.1}s` }}>
            <span className="spec-id">
              {spec.icon ? <img src={spec.icon} alt={spec.label} className="tech-matrix-icon" /> : spec.id}
            </span>
            <div className="spec-content">
              <label className="spec-label">{spec.label}</label>
              <span className="spec-value">{spec.value}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechMatrix;
