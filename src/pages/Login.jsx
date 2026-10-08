import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PawPrint, Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please enter your email and password.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      login(email, password, remember);
      setLoading(false);
      navigate('/');
    }, 800);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      background: 'linear-gradient(135deg, #F0F7F4 0%, #FFF8F0 100%)',
    }}>
      {/* Left panel - decorative */}
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
          <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🐾</div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '0.75rem' }}>Welcome back!</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: '280px', margin: '0 auto' }}>
            Your furry friends are waiting. Log in to access your orders, wishlist, and exclusive deals.
          </p>
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
      }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2.5rem', color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.4rem', textDecoration: 'none' }}>
            <PawPrint size={24} />
            Paw<span style={{ color: 'var(--accent)' }}>topia</span>
          </Link>

          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
            Sign in
          </h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
            Don't have an account?{' '}
            <Link to="/signup" style={{ color: 'var(--primary)', fontWeight: 700 }}>Sign up</Link>
          </p>

          {error && (
            <div style={{
              background: '#FEE2E2', border: '1px solid #FECACA', borderRadius: 'var(--radius-md)',
              padding: '0.75rem 1rem', marginBottom: '1.25rem', color: '#B91C1C', fontSize: '0.9rem', fontWeight: 600,
            }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {/* Email */}
            <div>
              <label htmlFor="login-email" style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                Email address
              </label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                  <Mail size={16} />
                </span>
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  style={{
                    width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem',
                    border: '2px solid var(--border-light)', borderRadius: 'var(--radius-md)',
                    fontSize: '0.95rem', outline: 'none', transition: 'border-color 0.2s',
                    fontFamily: 'var(--font-body)', boxSizing: 'border-box',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border-light)'}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <label htmlFor="login-password" style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  Password
                </label>
                <a href="#" style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>Forgot password?</a>
              </div>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                  <Lock size={16} />
                </span>
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  style={{
                    width: '100%', padding: '0.75rem 2.5rem 0.75rem 2.5rem',
                    border: '2px solid var(--border-light)', borderRadius: 'var(--radius-md)',
                    fontSize: '0.95rem', outline: 'none', transition: 'border-color 0.2s',
                    fontFamily: 'var(--font-body)', boxSizing: 'border-box',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border-light)'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  style={{ position: 'absolute', right: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', background: 'none', cursor: 'pointer' }}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <input
                type="checkbox"
                checked={remember}
                onChange={e => setRemember(e.target.checked)}
                id="login-remember"
                style={{ width: 16, height: 16, accentColor: 'var(--primary)' }}
              />
              Remember me
            </label>

            <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={loading}
              id="login-submit-btn"
              style={{ marginTop: '0.25rem', width: '100%', opacity: loading ? 0.7 : 1 }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
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
