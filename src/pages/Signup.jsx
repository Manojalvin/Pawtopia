import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PawPrint, Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!fullName.trim() || !email.trim() || !password.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      signup(fullName.trim(), email.trim(), phone.trim());
      setLoading(false);
      navigate('/');
    }, 800);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem 0.75rem 2.5rem',
    border: '2px solid var(--border-light)',
    borderRadius: 'var(--radius-md)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'var(--font-body)',
    boxSizing: 'border-box',
  };

  const iconStyle = {
    position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)',
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      background: 'linear-gradient(135deg, #F0F7F4 0%, #FFF8F0 100%)',
    }}>
      {/* Left panel */}
      <div style={{
        flex: '0 0 45%',
        background: 'linear-gradient(150deg, var(--primary) 0%, #154539 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem',
        position: 'relative',
        overflow: 'hidden',
      }} className="auth-left-panel">
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div style={{ position: 'relative', textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🐶</div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '0.75rem' }}>Join Pawtopia!</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: '280px', margin: '0 auto' }}>
            Create your free account and start spoiling your pets with the best products — fast delivery, exclusive deals, and vet-verified quality.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {['✓ Earn PawPoints on every order', '✓ Exclusive member-only deals', '✓ Easy order tracking & returns'].map(item => (
              <div key={item} style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', textAlign: 'left' }}>{item}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel - form */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        overflowY: 'auto',
      }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2.5rem', color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.4rem', textDecoration: 'none' }}>
            <PawPrint size={24} />
            Paw<span style={{ color: 'var(--accent)' }}>topia</span>
          </Link>

          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
            Create account
          </h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: 'var(--primary)', fontWeight: 700 }}>Sign in</Link>
          </p>

          {error && (
            <div style={{
              background: '#FEE2E2', border: '1px solid #FECACA', borderRadius: 'var(--radius-md)',
              padding: '0.75rem 1rem', marginBottom: '1.25rem', color: '#B91C1C', fontSize: '0.9rem', fontWeight: 600,
            }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Full Name */}
            <div>
              <label htmlFor="signup-name" style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                Full Name <span style={{ color: '#E63946' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <span style={iconStyle}><User size={16} /></span>
                <input
                  id="signup-name"
                  type="text"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  placeholder="Jane Doe"
                  required
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border-light)'}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="signup-email" style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                Email <span style={{ color: '#E63946' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <span style={iconStyle}><Mail size={16} /></span>
                <input
                  id="signup-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border-light)'}
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="signup-phone" style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                Phone Number
              </label>
              <div style={{ position: 'relative' }}>
                <span style={iconStyle}><Phone size={16} /></span>
                <input
                  id="signup-phone"
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border-light)'}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="signup-password" style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                Password <span style={{ color: '#E63946' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <span style={iconStyle}><Lock size={16} /></span>
                <input
                  id="signup-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Min. 6 characters"
                  required
                  style={{ ...inputStyle, paddingRight: '2.5rem' }}
                  onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border-light)'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  style={{ position: 'absolute', right: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', background: 'none', cursor: 'pointer' }}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="signup-confirm" style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                Confirm Password <span style={{ color: '#E63946' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <span style={iconStyle}><Lock size={16} /></span>
                <input
                  id="signup-confirm"
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  placeholder="Repeat password"
                  required
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border-light)'}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={loading}
              id="signup-submit-btn"
              style={{ marginTop: '0.25rem', width: '100%', opacity: loading ? 0.7 : 1 }}
            >
              {loading ? 'Creating account...' : 'Create Account 🐾'}
            </button>

            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.5 }}>
              By creating an account you agree to our{' '}
              <a href="#" style={{ color: 'var(--primary)' }}>Terms of Service</a> and{' '}
              <a href="#" style={{ color: 'var(--primary)' }}>Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .auth-left-panel { display: none !important; }
        }
      `}</style>
    </div>
  );
}
