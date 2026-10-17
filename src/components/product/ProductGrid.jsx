import React, { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ProductGrid.css';

import { products } from '../../lib/products';
import ProductCard from './ProductCard';

// 24 fills complete rows at 4, 3 and 2 columns
const PER_PAGE = 24;

// Page numbers with gaps, e.g. 1 … 4 5 6 … 8
const pageList = (current, total) => {
  const pages = [];
  for (let p = 1; p <= total; p++) {
    if (p === 1 || p === total || Math.abs(p - current) <= 1) pages.push(p);
    else if (pages[pages.length - 1] !== '…') pages.push('…');
  }
  return pages;
};

const ProductGrid = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const gridRef = useRef(null);

  const totalPages = Math.ceil(products.length / PER_PAGE);
  const page = Math.min(Math.max(parseInt(searchParams.get('page'), 10) || 1, 1), totalPages);
  const start = (page - 1) * PER_PAGE;
  const visible = products.slice(start, start + PER_PAGE);

  const goTo = (p) => {
    setSearchParams(p === 1 ? {} : { page: String(p) });
    const el = gridRef.current;
    if (!el) return;
    if (window.lenis) window.lenis.scrollTo(el, { offset: -120, duration: 0.8 });
    else el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="product-grid-section">
      <div className="container">
        <div className="product-header">
          <span className="subtitle">Our Products</span>
          <h1 className="main-title">Precision solutions for critical global industries</h1>
        </div>

        <div className="product-grid-meta" ref={gridRef}>
          Showing {start + 1}–{start + visible.length} of {products.length} products
        </div>

        {/* key remounts the grid so cards re-animate on page change */}
        <div className="product-catalog-grid" key={page}>
          {visible.map((item, idx) => (
            <ProductCard key={item.id} product={item} index={idx} />
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="product-pagination" aria-label="Product pages">
            <button
              type="button"
              className="page-btn page-arrow"
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
              aria-label="Previous page"
            >
              <ChevronLeft size={18} />
            </button>
            {pageList(page, totalPages).map((p, i) =>
              p === '…' ? (
                <span key={`gap-${i}`} className="page-gap">…</span>
              ) : (
                <button
                  type="button"
                  key={p}
                  className={`page-btn ${p === page ? 'active' : ''}`}
                  onClick={() => goTo(p)}
                  aria-current={p === page ? 'page' : undefined}
                >
                  {p}
                </button>
              )
            )}
            <button
              type="button"
              className="page-btn page-arrow"
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages}
              aria-label="Next page"
            >
              <ChevronRight size={18} />
            </button>
          </nav>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
