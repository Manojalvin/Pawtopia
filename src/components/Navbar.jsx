import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  PawPrint, Search, ShoppingCart, Heart, User, Menu, X, ChevronDown
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { PRODUCTS } from '../data/products';

export default function Navbar() {
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const searchRef = useRef(null);
  const userMenuRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim().length > 1) {
      const filtered = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(val.toLowerCase()) ||
        p.category.toLowerCase().includes(val.toLowerCase()) ||
        p.brand.toLowerCase().includes(val.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setShowSuggestions(false);
      setSearchQuery('');
    }
  };

  const handleSuggestionClick = (product) => {
    navigate(`/product/${product.id}`);
    setShowSuggestions(false);
    setSearchQuery('');
  };

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'Dogs', path: '/shop?pet=Dog' },
    { label: 'Cats', path: '/shop?pet=Cat' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <span>🐾 Free delivery on orders over ₹599</span>
        <span className="code">USE: PAWTOPIA15</span>
        <span>for 15% off your first order!</span>
      </div>

      <div className="navbar-wrapper">
        <div className="container">
          <nav className="navbar">
            {/* Logo */}
            <Link to="/" className="brand-logo" aria-label="Pawtopia Home">
              <div className="brand-logo-icon">
                <PawPrint size={20} strokeWidth={2.5} />
              </div>
              Paw<span className="accent">topia</span>
            </Link>

            {/* Desktop Nav Links */}
            <ul className="nav-links">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Search Bar */}
            <div className="nav-search-form" ref={searchRef}>
              <form onSubmit={handleSearchSubmit} style={{ position: 'relative' }}>
                <span className="nav-search-icon">
                  <Search size={16} />
                </span>
                <input
                  type="search"
                  id="navbar-search"
                  className="nav-search-input"
                  placeholder="Search for pet food, toys..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  autoComplete="off"
                  aria-label="Search products"
                />
              </form>
              {showSuggestions && suggestions.length > 0 && (
                <div className="search-suggestions-dropdown">
                  {suggestions.map(product => (
                    <div
                      key={product.id}
                      className="suggestion-item"
                      onClick={() => handleSuggestionClick(product)}
                    >
                      <img src={product.image} alt={product.name} />
                      <div>
                        <div className="name">{product.name}</div>
                        <div className="price">₹{product.price.toLocaleString()}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Nav Actions */}
            <div className="nav-actions">
              {/* Wishlist */}
              <Link to="/shop" className="nav-icon-btn" aria-label="Wishlist" title="Wishlist">
                <Heart size={20} />
              </Link>

              {/* Cart */}
              <Link to="/checkout" className="nav-icon-btn" aria-label={`Cart (${cartCount} items)`} title="Cart">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="nav-badge-count">{cartCount > 99 ? '99+' : cartCount}</span>
                )}
              </Link>

              {/* User */}
              {user ? (
                <div style={{ position: 'relative' }} ref={userMenuRef}>
                  <button
                    className="user-nav-btn"
                    onClick={() => setUserMenuOpen(prev => !prev)}
                    aria-haspopup="true"
                    aria-expanded={userMenuOpen}
                    id="user-menu-btn"
                  >
                    <User size={16} />
                    Hi, {user.name.split(' ')[0]}
                    <ChevronDown size={14} style={{ marginLeft: -2 }} />
                  </button>
                  {userMenuOpen && (
                    <div style={{
                      position: 'absolute',
                      top: 'calc(100% + 8px)',
                      right: 0,
                      background: '#fff',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-md)',
                      boxShadow: 'var(--shadow-lg)',
                      minWidth: '160px',
                      zIndex: 200,
                      overflow: 'hidden',
                    }}>
                      <button
                        onClick={() => { logout(); setUserMenuOpen(false); }}
                        style={{
                          display: 'block',
                          width: '100%',
                          padding: '0.75rem 1.25rem',
                          textAlign: 'left',
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          color: 'var(--text-main)',
                          background: 'none',
                          cursor: 'pointer',
                          transition: 'background 0.15s',
                        }}
                        onMouseEnter={e => e.target.style.background = 'var(--bg-subtle)'}
                        onMouseLeave={e => e.target.style.background = 'none'}
                        id="logout-btn"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login" className="user-nav-btn" id="login-nav-btn">
                  <User size={16} />
                  Login
                </Link>
              )}

              {/* Mobile Toggle */}
              <button
                className="mobile-menu-toggle"
                onClick={() => setMobileOpen(prev => !prev)}
                aria-label="Toggle mobile menu"
                id="mobile-menu-toggle"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{
            background: '#fff',
            borderTop: '1px solid var(--border-light)',
            padding: '1rem 1.25rem 1.5rem',
          }}>
            <form onSubmit={handleSearchSubmit} style={{ position: 'relative', marginBottom: '1rem' }}>
              <span className="nav-search-icon">
                <Search size={16} />
              </span>
              <input
                type="search"
                className="nav-search-input"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                style={{ width: '100%' }}
              />
            </form>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    padding: '0.75rem 0.5rem',
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: isActive(link.path) ? 'var(--primary)' : 'var(--text-main)',
                    borderBottom: '1px solid var(--border-light)',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              {user ? (
                <button
                  onClick={() => { logout(); setMobileOpen(false); }}
                  style={{
                    marginTop: '0.75rem',
                    padding: '0.75rem 1.5rem',
                    background: 'var(--bg-subtle)',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    cursor: 'pointer',
                    width: '100%',
                  }}
                >
                  Logout ({user.name})
                </button>
              ) : (
                <Link
                  to="/login"
                  style={{
                    marginTop: '0.75rem',
                    display: 'block',
                    padding: '0.75rem 1.5rem',
                    background: 'var(--primary)',
                    color: '#fff',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 700,
                    textAlign: 'center',
                  }}
                >
                  Login / Signup
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
