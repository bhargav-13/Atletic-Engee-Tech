import React from 'react';
import { Link } from 'react-router-dom';
import './ProductGrid.css';

// Importing assets
import electricalImg from '../../assets/images/Brass Turned component.png';
import defenseImg from '../../assets/images/Brass Broach component.png';
import evPartsImg from '../../assets/images/Brass Milling component.png';
import forgedImg from '../../assets/images/Brass Forged component.png';
import sanitaryImg from '../../assets/images/Brass Stamping component.png';
import customImg from '../../assets/images/brass_precision_parts.png';
import brassImg from '../../assets/images/manufacture_items.png';
import lpgImg from '../../assets/images/Turned Components.png';
import swapIcon from '../../assets/images/tdesign_swap-right.svg';

const ProductGrid = ({ addRevealRef }) => {
  const products = [
    { title: 'Electrical Components', image: electricalImg },
    { title: 'Defense Components', image: defenseImg },
    { title: 'EV Parts Components', image: evPartsImg },
    { title: 'Forged & Industrial Fitting', image: forgedImg },
    { title: 'Sanitary & Plumbing Components', image: sanitaryImg },
    { title: 'Custom Components', image: customImg },
    { title: 'Brass Components', image: brassImg },
    { title: 'Gas & LPG Fitting Components', image: lpgImg }
  ];

  return (
    <section className="product-grid-section">
      <div className="container">
        <div className="product-header">
          <span className="subtitle">Industry We Serve</span>
          <h1 className="main-title">Precision solutions for critical global industries</h1>
        </div>

        <div className="product-grid">
          {products.map((item, idx) => (
            <Link
              to="/product/electric-pin"
              key={idx}
              className={`product-card reveal reveal-up delay-${(idx % 3) + 1} visible`}
              ref={addRevealRef}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="product-card-header">
                <span className="product-ring"></span>
                <span className="product-title">{item.title}</span>
              </div>
              <div className="product-card-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="product-card-footer">
                <img src={swapIcon} alt="swap" className="swap-icon" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
