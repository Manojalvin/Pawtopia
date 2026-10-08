import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const subtotal = item.product.price * item.quantity;

  return (
    <div style={{
      display: 'flex',
      gap: '1.25rem',
      padding: '1.25rem',
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-light)',
      alignItems: 'flex-start',
      marginBottom: '0.85rem',
    }}>
      {/* Image */}
      <img
        src={item.product.image}
        alt={item.product.name}
        style={{
          width: 90,
          height: 90,
          borderRadius: 'var(--radius-sm)',
          objectFit: 'cover',
          flexShrink: 0,
          border: '1px solid var(--border-light)',
        }}
        onError={e => { e.target.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=70'; }}
      />

      {/* Details */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 4 }}>
          {item.product.brand}
        </div>
        <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-main)', lineHeight: 1.3, marginBottom: 4 }}>
          {item.product.name}
        </div>
        {item.size && (
          <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: 8 }}>
            Size: {item.size}
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          {/* Qty Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            background: 'var(--bg-page)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-full)',
            overflow: 'hidden',
          }}>
            <button
              onClick={() => updateQuantity(item.itemKey, item.quantity - 1)}
              aria-label="Decrease quantity"
              style={{
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-main)',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => e.target.style.background = 'var(--border)'}
              onMouseLeave={e => e.target.style.background = 'transparent'}
              id={`qty-dec-${item.itemKey}`}
            >
              <Minus size={14} />
            </button>
            <span style={{
              minWidth: 32,
              textAlign: 'center',
              fontWeight: 700,
              fontSize: '0.95rem',
              color: 'var(--text-main)',
            }}>
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.itemKey, item.quantity + 1)}
              aria-label="Increase quantity"
              style={{
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-main)',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => e.target.style.background = 'var(--border)'}
              onMouseLeave={e => e.target.style.background = 'transparent'}
              id={`qty-inc-${item.itemKey}`}
            >
              <Plus size={14} />
            </button>
          </div>

          {/* Subtotal & Remove */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
              ₹{subtotal.toLocaleString()}
            </span>
            <button
              onClick={() => removeFromCart(item.itemKey)}
              aria-label="Remove item"
              title="Remove from cart"
              style={{
                color: '#E63946',
                cursor: 'pointer',
                display: 'flex',
                padding: '4px',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = 0.7}
              onMouseLeave={e => e.currentTarget.style.opacity = 1}
              id={`remove-${item.itemKey}`}
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
