import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight, ShieldCheck, Truck, Star, RefreshCcw,
  ChevronRight, Zap
} from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';

const PERKS = [
  { icon: Truck, title: 'Same-Day Dispatch', desc: 'Orders before 2 PM ship today' },
  { icon: ShieldCheck, title: 'Vet-Verified Products', desc: '100% quality guaranteed' },
  { icon: RefreshCcw, title: '7-Day Returns', desc: 'Easy hassle-free returns' },
  { icon: Zap, title: 'Reward Points', desc: 'Earn pawpoints on every order' },
];

export default function Home() {
  const navigate = useNavigate();
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured);
  const bestSellers = PRODUCTS.filter(p => p.rating >= 4.8).slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <section className="hero-section" aria-label="Welcome to Pawtopia">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-badge-tag">
                <Star size={14} fill="var(--accent)" color="var(--accent)" />
                India's Most-Loved Pet Store
              </div>
              <h1 className="hero-title">
                Everything Your <span className="highlight">Pet Needs</span>,{' '}
                <span className="accent-highlight">All in One</span> Place
              </h1>
              <p className="hero-subtitle">
                Shop premium vet-verified food, irresistible treats, stimulating toys, and thoughtful accessories — all crafted with love for your furry family.
              </p>
              <div className="hero-ctas">
                <button
                  className="btn btn-accent btn-lg"
                  onClick={() => navigate('/shop')}
                  id="hero-shop-now-btn"
                >
                  Shop Now <ArrowRight size={18} />
                </button>
                <button
                  className="btn btn-secondary btn-lg"
                  onClick={() => document.getElementById('categories-section')?.scrollIntoView({ behavior: 'smooth' })}
                  id="hero-explore-btn"
                >
                  Explore Products
                </button>
              </div>
              {/* Mini trust stats */}
              <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                {[
                  { num: '50K+', label: 'Happy Pets' },
                  { num: '500+', label: 'Products' },
                  { num: '4.9★', label: 'Avg Rating' },
                ].map(stat => (
                  <div key={stat.label}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>
                      {stat.num}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=900&q=85"
                alt="Happy golden retriever with a tennis ball"
                className="hero-main-img"
              />
              {/* Floating cards */}
              <div className="hero-float-card top-left">
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'var(--primary-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--primary)', flexShrink: 0
                }}>
                  <Truck size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-main)' }}>Free Delivery</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>On orders above ₹599</div>
                </div>
              </div>
              <div className="hero-float-card bottom-right">
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: '#FFF1E8',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent)', flexShrink: 0
                }}>
                  <Star size={18} fill="var(--accent)" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-main)' }}>4.9 Rating</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>50,000+ reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks Banner */}
      <div className="perks-banner">
        <div className="container">
          <div className="perks-grid">
            {PERKS.map(perk => (
              <div className="perk-item" key={perk.title}>
                <div className="perk-icon-wrap">
                  <perk.icon size={22} />
                </div>
                <div>
                  <div className="perk-title">{perk.title}</div>
                  <div className="perk-desc">{perk.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <section className="section" id="categories-section" aria-label="Shop by category">
        <div className="container">
          <div className="section-header">
            <div className="section-title-wrap">
              <h2>Shop by Category</h2>
              <p>Find exactly what your pet needs</p>
            </div>
            <Link to="/shop" className="section-link">
              View all <ChevronRight size={16} />
            </Link>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '1.25rem',
          }}
            className="categories-grid"
          >
            {CATEGORIES.map(cat => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section" style={{ background: 'var(--bg-surface)', paddingTop: '4rem', paddingBottom: '4rem' }} aria-label="Featured products">
        <div className="container">
          <div className="section-header">
            <div className="section-title-wrap">
              <h2>Featured Products</h2>
              <p>Hand-picked by our vet team for your furry friends</p>
            </div>
            <Link to="/shop" className="section-link">
              View all <ChevronRight size={16} />
            </Link>
          </div>
          <div className="products-grid">
            {featuredProducts.slice(0, 8).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="section" aria-label="Promo">
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, #154539 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'center',
            gap: '2rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '40%', opacity: 0.07, backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
            <div>
              <div style={{ color: 'var(--secondary)', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                🎉 Limited Time Offer
              </div>
              <h2 style={{ color: '#FFFFFF', fontSize: '2rem', marginBottom: '0.85rem', fontFamily: 'var(--font-heading)' }}>
                Up to 40% off on Premium Pet Food
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', marginBottom: '1.5rem' }}>
                Use code <strong style={{ color: 'var(--secondary)' }}>PAWTOPIA15</strong> — exclusively for new customers. Today only!
              </p>
              <button
                className="btn btn-accent"
                onClick={() => navigate('/shop?category=Dog Food')}
                id="promo-cta-btn"
              >
                Grab the Deal <ArrowRight size={16} />
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=300&q=80"
              alt="Premium dog food"
              style={{ width: 200, height: 200, borderRadius: 'var(--radius-md)', objectFit: 'cover', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
            />
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section" aria-label="Best sellers">
        <div className="container">
          <div className="section-header">
            <div className="section-title-wrap">
              <h2>Best Sellers 🔥</h2>
              <p>Loved by thousands of pet parents across India</p>
            </div>
            <Link to="/shop" className="section-link">
              See all <ChevronRight size={16} />
            </Link>
          </div>
          <div className="products-grid">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories responsive fix */}
      <style>{`
        @media (max-width: 1024px) { .categories-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 600px) { .categories-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </main>
  );
}
