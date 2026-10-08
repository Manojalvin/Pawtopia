import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle2, ShoppingBag, Package, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;

  useEffect(() => {
    // Fire confetti celebration
    const end = Date.now() + 1500;
    const colors = ['#1E6B52', '#F97316', '#FCD34D', '#86EFAC'];
    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const paymentLabels = {
    upi: 'UPI',
    card: 'Credit / Debit Card',
    cod: 'Cash on Delivery',
  };

  return (
    <main style={{ padding: '4rem 0 6rem', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ maxWidth: '640px' }}>
        {/* Success Card */}
        <div style={{
          background: '#fff',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
          textAlign: 'center',
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, #154539 100%)',
            padding: '3rem 2rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

            <div style={{
              width: 80, height: 80,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.25rem',
            }}>
              <CheckCircle2 size={44} color="#fff" strokeWidth={1.5} />
            </div>

            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: '#fff', marginBottom: '0.5rem' }}>
              Order Placed Successfully! 🐾
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>
              Your furry friend is going to love this!
            </p>
          </div>

          {/* Body */}
          <div style={{ padding: '2rem' }}>
            {order && (
              <>
                <div style={{
                  background: 'var(--bg-surface)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  marginBottom: '1.5rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem 1.5rem',
                  textAlign: 'left',
                }}>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>Order ID</div>
                    <div style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1rem' }}>{order.id}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>Date</div>
                    <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.95rem' }}>{order.date}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>Total Paid</div>
                    <div style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '1.05rem' }}>₹{order.total?.toLocaleString()}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>Payment</div>
                    <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.95rem' }}>{paymentLabels[order.paymentMethod] || order.paymentMethod}</div>
                  </div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>Status</div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: '#DCFCE7', color: '#16A34A', borderRadius: 'var(--radius-full)', padding: '0.3rem 0.75rem', fontWeight: 700, fontSize: '0.88rem' }}>
                      <Package size={14} /> {order.status || 'Confirmed'}
                    </div>
                  </div>
                </div>

                {/* Items */}
                {order.items && order.items.length > 0 && (
                  <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
                    <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>Items Ordered</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {order.items.map(item => (
                        <div key={item.itemKey} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
                          <span style={{ color: 'var(--text-muted)' }}>
                            {item.product.name} <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>×{item.quantity}</span>
                          </span>
                          <span style={{ fontWeight: 700 }}>₹{(item.product.price * item.quantity).toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            <div style={{
              background: 'linear-gradient(135deg, #F0FFF4 0%, #FFF8F0 100%)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem 1.25rem',
              marginBottom: '1.75rem',
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
            }}>
              📦 Your order is being prepared and will be dispatched within <strong style={{ color: 'var(--primary)' }}>24 hours</strong>.
              You'll receive a tracking update via email/SMS!
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => navigate('/shop')}
                id="continue-shopping-btn"
                style={{ flex: 1, minWidth: '180px' }}
              >
                <ShoppingBag size={18} /> Continue Shopping
              </button>
              <button
                className="btn btn-secondary btn-lg"
                onClick={() => navigate('/')}
                style={{ flex: 1, minWidth: '140px' }}
              >
                Go to Home <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
