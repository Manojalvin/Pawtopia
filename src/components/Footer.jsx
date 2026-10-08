import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Mail, Phone, MapPin } from 'lucide-react';

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function TwitterIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
    </svg>
  );
}

function FacebookIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <h3>
              <PawPrint size={22} style={{ display: 'inline', marginRight: 8, color: 'var(--accent)' }} />
              Pawtopia
            </h3>
            <p>
              India's most loved pet store — vet-verified products, farm-fresh food, and fast delivery to make every tail wag harder.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[InstagramIcon, TwitterIcon, FacebookIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={['Instagram', 'Twitter', 'Facebook'][i]}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    background: '#23342E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#A3B5AE',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#23342E'; e.currentTarget.style.color = '#A3B5AE'; }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Shop</h4>
            <ul className="footer-links">
              <li><Link to="/shop?pet=Dog">Dog Products</Link></li>
              <li><Link to="/shop?pet=Cat">Cat Products</Link></li>
              <li><Link to="/shop?category=Treats">Treats & Snacks</Link></li>
              <li><Link to="/shop?category=Toys">Toys & Accessories</Link></li>
              <li><Link to="/shop?category=Grooming">Grooming Essentials</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div className="footer-col">
            <h4>Help</h4>
            <ul className="footer-links">
              <li><a href="#">Track My Order</a></li>
              <li><a href="#">Returns & Refunds</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact Support</a></li>
              <li><a href="#">Vet Connect</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h4>Stay in the loop 🐾</h4>
            <p style={{ fontSize: '0.88rem', color: '#9EAEA6', marginBottom: '0.75rem', lineHeight: 1.5 }}>
              Get exclusive deals, new product alerts and pet care tips right in your inbox.
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                className="newsletter-input"
                placeholder="your@email.com"
                aria-label="Newsletter email"
                id="newsletter-email"
              />
              <button
                type="button"
                style={{
                  background: 'var(--accent)',
                  color: '#fff',
                  padding: '0.6rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.target.style.background = 'var(--accent-hover)'}
                onMouseLeave={e => e.target.style.background = 'var(--accent)'}
                id="newsletter-subscribe-btn"
              >
                Subscribe
              </button>
            </div>
            <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.82rem', color: '#9EAEA6', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={14} /> hello@pawtopia.in
              </span>
              <span style={{ fontSize: '0.82rem', color: '#9EAEA6', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={14} /> +91 98765 43210
              </span>
              <span style={{ fontSize: '0.82rem', color: '#9EAEA6', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={14} /> Bengaluru, Karnataka
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Pawtopia. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <a href="#" style={{ color: '#798D85', fontSize: '0.85rem' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#798D85', fontSize: '0.85rem' }}>Terms of Service</a>
          </div>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            Made with <span style={{ color: '#E63946' }}>❤️</span> for pet parents
          </span>
        </div>
      </div>
    </footer>
  );
}
