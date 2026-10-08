import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Star, Heart, ShoppingCart, Truck, ShieldCheck,
  RefreshCcw, ChevronLeft, Package, Minus, Plus
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  const product = PRODUCTS.find(p => String(p.id) === String(id));
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes?.[0] || 'Standard');
      setQuantity(1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [id, product]);

  if (!product) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '2rem' }}>
        <span style={{ fontSize: '3rem' }}>🐾</span>
        <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>Product not found</h2>
        <p style={{ color: 'var(--text-muted)' }}>This product may have been removed or doesn't exist.</p>
        <button className="btn btn-primary" onClick={() => navigate('/shop')}>
          <ChevronLeft size={16} /> Back to Shop
        </button>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const discountPct = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const relatedProducts = PRODUCTS
    .filter(p => p.id !== product.id && (p.category === product.category || p.petType === product.petType))
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, quantity);
    navigate('/checkout');
  };

  // Mock reviews
  const mockReviews = [
    { name: 'Priya S.', rating: 5, date: 'Sep 2026', text: 'My dog absolutely loves this! Great quality and fast delivery. Will definitely order again.' },
    { name: 'Rohan M.', rating: 5, date: 'Aug 2026', text: 'Excellent product, vet recommended and my pup can\'t get enough of it. Highly recommended!' },
    { name: 'Ananya K.', rating: 4, date: 'Aug 2026', text: 'Good value for money. Packaging was secure and product is fresh. Slight delay in delivery but overall happy.' },
  ];

  return (
    <main style={{ padding: '2rem 0 4rem' }}>
      <div className="container">
        {/* Breadcrumb */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
          <button onClick={() => navigate('/')} style={{ color: 'var(--text-muted)', cursor: 'pointer', background: 'none' }}>Home</button>
          <span>/</span>
          <button onClick={() => navigate('/shop')} style={{ color: 'var(--text-muted)', cursor: 'pointer', background: 'none' }}>Shop</button>
          <span>/</span>
          <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{product.name}</span>
        </nav>

        {/* Product Main */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start',
          marginBottom: '4rem',
        }} className="product-detail-grid">
          {/* Left: Image */}
          <div style={{ position: 'sticky', top: '6rem' }}>
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              background: 'var(--bg-surface)',
              aspectRatio: '1/1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
              {discountPct && (
                <span style={{
                  position: 'absolute', top: '1rem', left: '1rem',
                  background: '#E63946', color: '#fff',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.3rem 0.7rem',
                  fontSize: '0.82rem', fontWeight: 700,
                  zIndex: 2,
                }}>
                  {discountPct}% OFF
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => { e.target.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=70'; }}
              />
            </div>
          </div>

          {/* Right: Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
                {product.brand}
              </div>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--text-main)', lineHeight: 1.3, marginBottom: '0.75rem' }}>
                {product.name}
              </h1>

              {/* Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[1,2,3,4,5].map(s => (
                    <Star
                      key={s}
                      size={16}
                      fill={s <= Math.round(product.rating) ? '#D97706' : 'none'}
                      color={s <= Math.round(product.rating) ? '#D97706' : '#D1D5DB'}
                    />
                  ))}
                </div>
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{product.rating.toFixed(1)}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>({product.reviews.toLocaleString()} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)' }}>
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <>
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span style={{ color: '#16A34A', fontWeight: 700, fontSize: '0.95rem' }}>
                    Save ₹{(product.originalPrice - product.price).toLocaleString()}
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              {product.description}
            </p>

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.6rem', color: 'var(--text-main)' }}>
                  Size / Variant
                </div>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      style={{
                        padding: '0.45rem 1rem',
                        borderRadius: 'var(--radius-full)',
                        border: `2px solid ${selectedSize === size ? 'var(--primary)' : 'var(--border-light)'}`,
                        background: selectedSize === size ? 'var(--primary-light)' : '#fff',
                        color: selectedSize === size ? 'var(--primary)' : 'var(--text-main)',
                        fontWeight: 600,
                        fontSize: '0.88rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.6rem', color: 'var(--text-main)' }}>
                Quantity
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0', border: '2px solid var(--border-light)', borderRadius: 'var(--radius-full)', width: 'fit-content', overflow: 'hidden' }}>
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  style={{ padding: '0.5rem 1rem', cursor: 'pointer', fontSize: '1.1rem', background: 'none', color: 'var(--text-main)', display: 'flex', alignItems: 'center' }}
                  aria-label="Decrease quantity"
                  id="qty-decrease"
                >
                  <Minus size={16} />
                </button>
                <span style={{ padding: '0.5rem 1rem', fontWeight: 700, minWidth: '2.5rem', textAlign: 'center' }}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  style={{ padding: '0.5rem 1rem', cursor: 'pointer', fontSize: '1.1rem', background: 'none', color: 'var(--text-main)', display: 'flex', alignItems: 'center' }}
                  aria-label="Increase quantity"
                  id="qty-increase"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                className="btn btn-primary btn-lg"
                onClick={handleAddToCart}
                style={{ flex: 1, minWidth: '160px' }}
                id="product-add-to-cart-btn"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>
              <button
                className="btn btn-accent btn-lg"
                onClick={handleBuyNow}
                style={{ flex: 1, minWidth: '160px' }}
                id="product-buy-now-btn"
              >
                Buy Now
              </button>
              <button
                onClick={() => toggleWishlist(product)}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  border: '2px solid var(--border-light)',
                  background: inWishlist ? '#FEE2E2' : '#fff',
                  color: inWishlist ? '#E63946' : 'var(--text-muted)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                }}
                aria-label="Toggle wishlist"
                id="product-wishlist-btn"
              >
                <Heart size={18} fill={inWishlist ? '#E63946' : 'none'} color={inWishlist ? '#E63946' : 'currentColor'} />
              </button>
            </div>

            {/* Trust Badges */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '0.75rem',
              padding: '1.25rem',
              background: 'var(--bg-surface)',
              borderRadius: 'var(--radius-md)',
              marginTop: '0.5rem',
            }}>
              {[
                { icon: Truck, text: 'Free delivery above ₹599' },
                { icon: ShieldCheck, text: 'Vet-verified quality' },
                { icon: RefreshCcw, text: '7-day easy returns' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', textAlign: 'center' }}>
                  <Icon size={20} color="var(--primary)" />
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, lineHeight: 1.3 }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Product Info */}
            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
              <h3 style={{ fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)', fontSize: '1rem' }}>Product Details</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 1.5rem' }}>
                {[
                  { label: 'Brand', value: product.brand },
                  { label: 'Category', value: product.category },
                  { label: 'For', value: product.petType },
                  { label: 'Rating', value: `${product.rating} ★` },
                ].map(({ label, value }) => (
                  <div key={label} style={{ fontSize: '0.88rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>{label}: </span>
                    <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
            Customer Reviews
          </h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {mockReviews.map((review, i) => (
              <div key={i} style={{
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem 1.5rem',
                border: '1px solid var(--border-light)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>
                      {review.name[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.95rem' }}>{review.name}</div>
                      <div style={{ display: 'flex', gap: '2px' }}>
                        {[1,2,3,4,5].map(s => (
                          <Star key={s} size={12} fill={s <= review.rating ? '#D97706' : 'none'} color={s <= review.rating ? '#D97706' : '#D1D5DB'} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{review.date}</span>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.93rem' }}>{review.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* You may also like */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
              You may also like
            </h2>
            <div className="products-grid">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .product-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
