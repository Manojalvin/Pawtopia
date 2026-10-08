import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '4rem 2rem',
        color: 'var(--text-muted)',
        background: '#fff',
        borderRadius: 'var(--radius-md)',
        border: '1px dashed var(--border)',
      }}>
        <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🐾</span>
        <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>No products found</h3>
        <p>Try adjusting your filters or search term.</p>
      </div>
    );
  }

  return (
    <div className="products-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
