import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, Tag, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const DELIVERY_FEE = 49;
const FREE_DELIVERY_THRESHOLD = 599;

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, clearCart, cartSubtotal, cartSavings } = useCart();
  const { user, addOrder } = useAuth();

  const [step, setStep] = useState('cart'); // 'cart' | 'details'
  const [form, setForm] = useState({
    fullName: user?.name || '',
    phone: user?.phone || '',
    email: user?.email || '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const deliveryFee = cartSubtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const totalAmount = cartSubtotal + deliveryFee;

  const handleFormChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleProceed = () => {
    if (cart.length === 0) return;
    setStep('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setFormError('');
    const required = ['fullName', 'phone', 'email', 'address', 'city', 'state', 'pincode'];
    for (const key of required) {
      if (!form[key].trim()) {
        setFormError(`Please fill in all delivery details.`);
        return;
      }
    }

    setSubmitting(true);
    setTimeout(() => {
      const order = addOrder({
        items: [...cart],
        subtotal: cartSubtotal,
        savings: cartSavings,
        deliveryFee,
        total: totalAmount,
        paymentMethod,
        address: form,
      });
      clearCart();
      setSubmitting(false);
      navigate('/order-success', { state: { order } });
    }, 1200);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.7rem 1rem',
    border: '2px solid var(--border-light)',
    borderRadius: 'var(--radius-md)',
    fontSize: '0.92rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'var(--font-body)',
    boxSizing: 'border-box',
    color: 'var(--text-main)',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 600,
    fontSize: '0.88rem',
    color: 'var(--text-main)',
    marginBottom: '0.35rem',
  };

  if (cart.length === 0 && step === 'cart') {
    return (
      <main style={{ padding: '4rem 0', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', maxWidth: '380px', padding: '2rem' }}>
          <span style={{ fontSize: '4rem' }}>🛒</span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text-main)', margin: '1rem 0 0.5rem' }}>Your cart is empty</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Looks like you haven't added anything yet. Start browsing our pet products!
          </p>
          <Link to="/shop" className="btn btn-primary btn-lg">
            <ShoppingCart size={18} /> Browse Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ padding: '2rem 0 4rem', background: 'var(--bg-page)' }}>
      <div className="container">
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
          {step === 'cart' ? '🛒 Your Cart' : '📦 Checkout'}
        </h1>

        {/* Step Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {['Cart', 'Delivery & Payment'].map((s, i) => {
            const active = (i === 0 && step === 'cart') || (i === 1 && step === 'details');
            const done = i === 0 && step === 'details';
            return (
              <React.Fragment key={s}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.4rem 1rem', borderRadius: 'var(--radius-full)',
                  background: active ? 'var(--primary)' : done ? 'var(--primary-light)' : 'var(--bg-surface)',
                  color: active ? '#fff' : done ? 'var(--primary)' : 'var(--text-muted)',
                  fontWeight: 600, fontSize: '0.88rem',
                }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', background: active ? 'rgba(255,255,255,0.2)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.78rem' }}>
                    {done ? '✓' : i + 1}
                  </span>
                  {s}
                </div>
                {i < 1 && <ArrowRight size={14} color="var(--text-muted)" />}
              </React.Fragment>
            );
          })}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '2rem', alignItems: 'start' }} className="checkout-grid">
          {/* Left: Cart or Form */}
          <div>
            {step === 'cart' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {cart.map(item => (
                  <div
                    key={item.itemKey}
                    style={{
                      background: '#fff',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      padding: '1.25rem',
                      display: 'grid',
                      gridTemplateColumns: '80px 1fr auto',
                      gap: '1rem',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      style={{ width: 80, height: 80, borderRadius: 'var(--radius-sm)', objectFit: 'cover', cursor: 'pointer' }}
                      onClick={() => navigate(`/product/${item.product.id}`)}
                      onError={e => { e.target.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=70'; }}
                    />
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.15rem' }}>{item.product.brand}</div>
                      <div
                        style={{ fontWeight: 700, color: 'var(--text-main)', cursor: 'pointer', fontSize: '0.95rem', marginBottom: '0.25rem' }}
                        onClick={() => navigate(`/product/${item.product.id}`)}
                      >
                        {item.product.name}
                      </div>
                      {item.size && item.size !== 'Standard' && (
                        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Size: {item.size}</div>
                      )}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.5rem' }}>
                        <button
                          onClick={() => updateQuantity(item.itemKey, item.quantity - 1)}
                          style={{ width: 28, height: 28, border: '1px solid var(--border-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: '#fff' }}
                          aria-label="Decrease"
                        >
                          <Minus size={12} />
                        </button>
                        <span style={{ fontWeight: 700, minWidth: '1.5rem', textAlign: 'center', fontSize: '0.95rem' }}>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.itemKey, item.quantity + 1)}
                          style={{ width: 28, height: 28, border: '1px solid var(--border-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: '#fff' }}
                          aria-label="Increase"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                      <div style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '1.05rem' }}>
                        ₹{(item.product.price * item.quantity).toLocaleString()}
                      </div>
                      {item.product.originalPrice && (
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                          ₹{(item.product.originalPrice * item.quantity).toLocaleString()}
                        </div>
                      )}
                      <button
                        onClick={() => removeFromCart(item.itemKey)}
                        style={{ color: '#E63946', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.82rem', fontWeight: 600 }}
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <form onSubmit={handlePlaceOrder} id="checkout-form">
                {/* Delivery Details */}
                <div style={{ background: '#fff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', padding: '1.5rem', marginBottom: '1.25rem' }}>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Truck size={18} color="var(--primary)" /> Delivery Details
                  </h2>
                  {formError && (
                    <div style={{ background: '#FEE2E2', color: '#B91C1C', borderRadius: 'var(--radius-sm)', padding: '0.65rem 1rem', marginBottom: '1rem', fontSize: '0.88rem', fontWeight: 600 }}>
                      {formError}
                    </div>
                  )}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={labelStyle} htmlFor="fullName">Full Name *</label>
                      <input id="fullName" name="fullName" value={form.fullName} onChange={handleFormChange} style={inputStyle} placeholder="Jane Doe"
                        onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border-light)'} />
                    </div>
                    <div>
                      <label style={labelStyle} htmlFor="phone">Phone *</label>
                      <input id="phone" name="phone" value={form.phone} onChange={handleFormChange} style={inputStyle} placeholder="+91 98765 43210"
                        onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border-light)'} />
                    </div>
                    <div>
                      <label style={labelStyle} htmlFor="email">Email *</label>
                      <input id="email" name="email" value={form.email} onChange={handleFormChange} style={inputStyle} placeholder="you@email.com"
                        onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border-light)'} />
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={labelStyle} htmlFor="address">Address *</label>
                      <input id="address" name="address" value={form.address} onChange={handleFormChange} style={inputStyle} placeholder="House No., Street, Area"
                        onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border-light)'} />
                    </div>
                    <div>
                      <label style={labelStyle} htmlFor="city">City *</label>
                      <input id="city" name="city" value={form.city} onChange={handleFormChange} style={inputStyle} placeholder="Bengaluru"
                        onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border-light)'} />
                    </div>
                    <div>
                      <label style={labelStyle} htmlFor="state">State *</label>
                      <input id="state" name="state" value={form.state} onChange={handleFormChange} style={inputStyle} placeholder="Karnataka"
                        onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border-light)'} />
                    </div>
                    <div>
                      <label style={labelStyle} htmlFor="pincode">Pincode *</label>
                      <input id="pincode" name="pincode" value={form.pincode} onChange={handleFormChange} style={inputStyle} placeholder="560001"
                        maxLength={6}
                        onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border-light)'} />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div style={{ background: '#fff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', padding: '1.5rem' }}>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    💳 Payment Method
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                      { value: 'upi', label: 'UPI', icon: '📱', desc: 'Pay using any UPI app — GPay, PhonePe, Paytm' },
                      { value: 'card', label: 'Credit / Debit Card', icon: '💳', desc: 'Visa, Mastercard, RuPay accepted' },
                      { value: 'cod', label: 'Cash on Delivery', icon: '💵', desc: 'Pay when your order arrives' },
                    ].map(option => (
                      <label
                        key={option.value}
                        htmlFor={`pay-${option.value}`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          padding: '1rem 1.25rem',
                          borderRadius: 'var(--radius-md)',
                          border: `2px solid ${paymentMethod === option.value ? 'var(--primary)' : 'var(--border-light)'}`,
                          background: paymentMethod === option.value ? 'var(--primary-light)' : '#fff',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                      >
                        <input
                          type="radio"
                          id={`pay-${option.value}`}
                          name="payment"
                          value={option.value}
                          checked={paymentMethod === option.value}
                          onChange={() => setPaymentMethod(option.value)}
                          style={{ accentColor: 'var(--primary)', width: 18, height: 18 }}
                        />
                        <span style={{ fontSize: '1.4rem' }}>{option.icon}</span>
                        <div>
                          <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.95rem' }}>{option.label}</div>
                          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{option.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Right: Order Summary */}
          <div style={{ position: 'sticky', top: '6rem' }}>
            <div style={{ background: '#fff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', padding: '1.5rem' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
                Order Summary
              </h2>

              {/* Mini cart items */}
              {cart.length > 0 && (
                <div style={{ marginBottom: '1.25rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.25rem' }}>
                  {cart.map(item => (
                    <div key={item.itemKey} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', maxWidth: '200px' }}>
                        {item.product.name} <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>×{item.quantity}</span>
                      </span>
                      <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>₹{(item.product.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Subtotal</span>
                  <span style={{ fontWeight: 600 }}>₹{cartSubtotal.toLocaleString()}</span>
                </div>
                {cartSavings > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                    <span style={{ color: '#16A34A', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Tag size={13} /> Discount saved
                    </span>
                    <span style={{ color: '#16A34A', fontWeight: 600 }}>−₹{cartSavings.toLocaleString()}</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Truck size={13} /> Delivery
                  </span>
                  <span style={{ fontWeight: 600, color: deliveryFee === 0 ? '#16A34A' : 'var(--text-main)' }}>
                    {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                  </span>
                </div>
                {deliveryFee > 0 && (
                  <div style={{ background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)', padding: '0.5rem 0.75rem', fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>
                    Add ₹{(FREE_DELIVERY_THRESHOLD - cartSubtotal).toLocaleString()} more for free delivery!
                  </div>
                )}
              </div>

              <div style={{ borderTop: '2px solid var(--border-light)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-main)' }}>Total</span>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--text-main)' }}>₹{totalAmount.toLocaleString()}</span>
              </div>

              {step === 'cart' ? (
                <button
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%' }}
                  onClick={handleProceed}
                  disabled={cart.length === 0}
                  id="proceed-to-checkout-btn"
                >
                  Proceed to Checkout <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  className="btn btn-accent btn-lg"
                  style={{ width: '100%', opacity: submitting ? 0.7 : 1 }}
                  onClick={handlePlaceOrder}
                  disabled={submitting}
                  id="place-order-btn"
                  form="checkout-form"
                  type="submit"
                >
                  {submitting ? 'Placing Order...' : '🐾 Place Order'}
                </button>
              )}

              {step === 'details' && (
                <button
                  onClick={() => setStep('cart')}
                  style={{ width: '100%', marginTop: '0.75rem', background: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.88rem', fontWeight: 600 }}
                >
                  ← Back to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .checkout-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
