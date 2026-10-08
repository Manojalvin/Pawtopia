import React from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle2, Info, X } from 'lucide-react';

export default function Toast() {
  const { toasts, removeToast } = useCart();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container" role="region" aria-label="Notifications">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`toast toast-${toast.type || 'success'}`}
        >
          {toast.type === 'info' ? (
            <Info size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
          ) : (
            <CheckCircle2 size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
          )}
          <span style={{ flex: 1 }}>{toast.message}</span>
          <button
            onClick={() => removeToast(toast.id)}
            style={{
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              padding: '2px'
            }}
            aria-label="Close notification"
          >
            <X size={15} />
          </button>
        </div>
      ))}
    </div>
  );
}
