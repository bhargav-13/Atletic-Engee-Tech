import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DetailHero from '../components/product-detail/DetailHero';
import TechMatrix from '../components/product-detail/TechMatrix';
import EngineeredSpecs from '../components/product-detail/EngineeredSpecs';
import ReliabilityBanner from '../components/product-detail/ReliabilityBanner';
import RelatedProducts from '../components/product-detail/RelatedProducts';

// Assets
import electricPinImg from '../assets/images/electric_pin_component.png';
import gasLpgImg from '../assets/images/Gas & LPG Fitting Components.png';
// TODO: Replace these with product_sub_image-1.png and product_sub_image-2.png once added to src/assets/images/
import subImg1 from '../assets/images/product_sub_image-1.png';
import subImg2 from '../assets/images/product_sub_image-2.png';
import related1 from '../assets/images/Electrical Components.png';
import related2 from '../assets/images/Defense Components.png';
import related3 from '../assets/images/EV Parts Components.png';

// Icons
import icon1 from '../assets/images/Icon.svg';
import icon2 from '../assets/images/Icon (1).svg';
import icon3 from '../assets/images/Icon (2).svg';
import icon4 from '../assets/images/Icon (3).svg';
import icon5 from '../assets/images/Icon (4).svg';
import icon6 from '../assets/images/Icon (5).svg';
import useScrollReveal from '../hooks/useScrollReveal';

const ProductDetail = () => {
  const addRevealRef = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productData = {
    title: "Electric Pin.",
    category: "COMPONENT SKU: EP-250-G",
    description: "The Monolith series electrical pin represents the zenith of Swiss-turning capability. Engineered for zero-fail environments where conductivity and structural integrity are non-negotiable.",
    sector: "AEROSPACE & DEFENCE",
    mainImage: electricPinImg,
    gallery: [gasLpgImg, subImg1, subImg1, subImg2],
    specs: [
      { id: "01", icon: icon1, label: "Tolerance", value: "+/ -0.005mm" },
      { id: "02", icon: icon2, label: "Finish", value: "Gold Plating" },
      { id: "03", icon: icon3, label: "Size", value: "Ø 2.50mm" },
      { id: "04", icon: icon4, label: "Length", value: "12.00mm" },
      { id: "05", icon: icon5, label: "Material", value: "Tellurium Cu" },
      { id: "06", icon: icon6, label: "Process", value: "Swiss Turning" }
    ],
    engineeredData: {
      standards: [
        { name: "Metric", code: "ISO 261 / 262" },
        { name: "Unified", code: "UNC / UNF / UNEF" },
        { name: "British Standard", code: "BSW / BSF" },
        { name: "American Pipe", code: "NPT / NPTF" }
      ],
      integrityText: "Utilizing the superior machinability and conductivity of Tellurium Copper (TeCu), our Electric Pins are designed for low contact resistance and high thermal dissipation. Each pin undergoes a rigorous Swiss-Turning process, ensuring concentricity and surface finishes that exceed military specifications.",
      features: [
        { title: "High Conductivity", desc: "Optimized for minimal signal loss and maximum power efficiency." },
        { title: "Swiss Precision", desc: "Manufactured on high-end sliding head lathes for extreme consistency." }
      ]
    },
    related: [
      { title: "Electrical Components", image: related1 },
      { title: "Defense Components", image: related2 },
      { title: "EV Parts Components", image: related3 }
    ]
  };

  return (
    <div className="product-detail-page">
      <DetailHero product={productData} addRevealRef={addRevealRef} />
      <TechMatrix specs={productData.specs} addRevealRef={addRevealRef} />
      <EngineeredSpecs data={productData.engineeredData} addRevealRef={addRevealRef} />
      <ReliabilityBanner addRevealRef={addRevealRef} />
      <RelatedProducts products={productData.related} addRevealRef={addRevealRef} />
    </div>
  );
};

export default ProductDetail;
