import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const navigate = useNavigate();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const discountPct = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <article className="product-card">
      {/* Image */}
      <div className="product-image-container" onClick={handleCardClick} role="link" tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && handleCardClick()}
        aria-label={`View ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
          onError={e => { e.target.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70'; }}
        />

        {/* Badges */}
        <div className="card-top-badges">
          {discountPct && (
            <span className="badge badge-discount">
              <Tag size={10} /> {discountPct}% OFF
            </span>
          )}
          {product.badge && (
            <span className="badge badge-bestseller">{product.badge}</span>
          )}
        </div>

        {/* Wishlist */}
        <button
          className={`wishlist-btn-floating ${inWishlist ? 'active' : ''}`}
          onClick={handleWishlist}
          aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          title={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            size={17}
            fill={inWishlist ? '#E63946' : 'none'}
            color={inWishlist ? '#E63946' : 'currentColor'}
          />
        </button>
      </div>

      {/* Info */}
      <div className="product-content">
        <div className="product-brand">{product.brand}</div>
        <h3
          className="product-title"
          onClick={handleCardClick}
          style={{ cursor: 'pointer' }}
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div className="product-rating">
          <Star size={14} fill="#D97706" color="#D97706" />
          <span>{product.rating.toFixed(1)}</span>
          <span className="product-reviews-count">({product.reviews.toLocaleString()})</span>
        </div>

        {/* Price */}
        <div className="product-price-row">
          <span className="price-current">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="price-original">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          className="product-add-btn"
          onClick={handleAddToCart}
          id={`add-to-cart-${product.id}`}
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </article>
  );
}
