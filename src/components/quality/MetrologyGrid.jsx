import React from 'react';
import './MetrologyGrid.css';
import plugGuageImg from '../../assets/images/Plug Guage.png';
import roughnessTesterImg from '../../assets/images/Roughness Tester.png';
import hardnessTesterImg from '../../assets/images/Hardness Tester copy.png';
import coordinateMachineImg from '../../assets/images/Coordinate Measuring Machine.png';
import profileProjectorImg from '../../assets/images/Profile Projector.png';
import heightGuageImg from '../../assets/images/Height Guage.png';

const MetrologyGrid = ({ addRevealRef }) => {
  const instruments = [
    {
      id: 'QC-02',
      title: 'Plug Guage',
      image: plugGuageImg,
      desc: 'Hardened stainless steel construction with absolute scale for rapid, precise internal and external dimensions.',
      spec: 'ACC: 0.01MM',
      icon: '📏'
    },
    {
      id: 'QC-03',
      title: 'Roughness Tester',
      image: roughnessTesterImg,
      desc: 'High-speed optical sorting system utilizing neural network algorithms to detect surface defects and dimensional deviations.',
      spec: '1,200 PPM',
      icon: '🎯'
    },
    {
      id: 'QC-04',
      title: 'Hardness Tester',
      image: hardnessTesterImg,
      desc: 'Rockwell and Brinell testing systems to ensure structural integrity and material specification compliance across all alloys.',
      spec: 'HRC / HBW',
      icon: '🛡️'
    },
    {
      id: 'QC-04',
      title: 'Coordinate Measuring Machine',
      image: coordinateMachineImg,
      desc: 'Hardened stainless steel construction with absolute scale for rapid, precise internal and external dimensions.',
      spec: 'ACC: 0.01MM',
      icon: '📏'
    },
    {
      id: 'QC-05',
      title: 'Profile Projector',
      image: profileProjectorImg,
      desc: 'Hardened stainless steel construction with absolute scale for rapid, precise internal and external dimensions.',
      spec: 'ACC: 0.01MM',
      icon: '📏'
    },
    {
      id: 'QC-06',
      title: 'Height Guage',
      image: heightGuageImg,
      desc: 'Hardened stainless steel construction with absolute scale for rapid, precise internal and external dimensions.',
      spec: 'ACC: 0.01MM',
      icon: '📏'
    }
  ];

  return (
    <section className="metrology-grid-section">
      <div className="container">
        <div className="instruments-grid">
          {instruments.map((item, idx) => (
            <div key={idx} className="instrument-card reveal reveal-up" ref={addRevealRef}>
              <div className="card-image-box">
                <img src={item.image} alt={item.title} className="card-img" />
              </div>
              <div className="card-content">
                <div className="card-header-row">
                  <h3 className="instrument-title">{item.title}</h3>
                  <span className="instrument-id">{item.id}</span>
                </div>
                <p className="instrument-desc">{item.desc}</p>

                <div className="card-footer">
                  <span className="spec-label">
                    <span className="spec-icon">{item.icon}</span> {item.spec}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetrologyGrid;

