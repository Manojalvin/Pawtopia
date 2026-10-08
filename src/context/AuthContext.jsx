import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('pawtopia_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('pawtopia_orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('pawtopia_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('pawtopia_user');
      }
    } catch (e) {
      console.error(e);
    }
  }, [user]);

  useEffect(() => {
    try {
      localStorage.setItem('pawtopia_orders', JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders]);

  const login = (email, password, remember = true) => {
    // Simulated login: extract name from email or use default
    const namePart = email.split('@')[0];
    const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
    const userData = {
      name: formattedName || 'Pet Parent',
      email: email,
      phone: '+91 98765 43210',
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    };
    setUser(userData);
    return userData;
  };

  const signup = (fullName, email, phone) => {
    const userData = {
      name: fullName,
      email: email,
      phone: phone || '+91 98765 43210',
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    };
    setUser(userData);
    return userData;
  };

  const logout = () => {
    setUser(null);
  };

  const addOrder = (orderData) => {
    const newOrder = {
      id: 'PAW-' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }),
      status: 'Confirmed',
      ...orderData
    };
    setOrders(prev => [newOrder, ...prev]);
    return newOrder;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        orders,
        login,
        signup,
        logout,
        addOrder
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
