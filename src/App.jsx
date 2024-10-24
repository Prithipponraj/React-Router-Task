import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import Navigation from './components/Navigation';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return removeFromCart(id);
    setCartItems(prevItems => 
      prevItems.map(item => item.id === id ? { ...item, quantity } : item)
    );
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Router>
      <Navigation cartItems={cartItems} />
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route 
            path="/" 
            element={<Home addToCart={addToCart} cartItems={cartItems} />} 
          />
          <Route 
            path="/cart" 
            element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} 
          />
          <Route 
            path="/payment" 
            element={<PaymentPage cartItems={cartItems} totalPrice={totalPrice} removeFromCart={removeFromCart} />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
