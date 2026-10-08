import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('pawtopia_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('pawtopia_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [toasts, setToasts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('pawtopia_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('pawtopia_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error('Failed to save wishlist to localStorage', e);
    }
  }, [wishlist]);

  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random().toString(36).substring(2, 6);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 3200);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const addToCart = (product, size = null, quantity = 1) => {
    const chosenSize = size || (product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'Standard');
    const itemKey = `${product.id}-${chosenSize}`;

    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.itemKey === itemKey);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      } else {
        return [
          ...prev,
          {
            itemKey,
            productId: product.id,
            product,
            size: chosenSize,
            quantity
          }
        ];
      }
    });

    showToast(`Added "${product.name}" to cart! 🐾`, 'success');
  };

  const removeFromCart = (itemKey) => {
    setCart(prev => prev.filter(item => item.itemKey !== itemKey));
    showToast('Removed item from cart', 'info');
  };

  const updateQuantity = (itemKey, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemKey);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.itemKey === itemKey ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (product) => {
    const isSaved = wishlist.some(item => item.id === product.id);
    if (isSaved) {
      setWishlist(prev => prev.filter(item => item.id !== product.id));
      showToast(`Removed from wishlist`, 'info');
    } else {
      setWishlist(prev => [...prev, product]);
      showToast(`Saved to your wishlist! ❤️`, 'success');
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const cartSubtotal = cart.reduce((acc, item) => {
    return acc + (item.product.price * item.quantity);
  }, 0);

  const cartOriginalTotal = cart.reduce((acc, item) => {
    return acc + ((item.product.originalPrice || item.product.price) * item.quantity);
  }, 0);

  const cartSavings = cartOriginalTotal - cartSubtotal;

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        cartCount,
        cartSubtotal,
        cartOriginalTotal,
        cartSavings,
        isCartOpen,
        setIsCartOpen,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
