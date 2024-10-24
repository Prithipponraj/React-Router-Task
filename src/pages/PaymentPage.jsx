import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = ({ cartItems, totalPrice, removeFromCart }) => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');

  
  const discount = 0.1; 
  const discountedPrice = totalPrice * (1 - discount);

  const handleCardNumberChange = (event) => {
    const value = event.target.value
      .replace(/\D/g, '')
      .replace(/(.{4})/g, '$1-') 
      .trim();
    setCardNumber(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Payment Successful!');
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label  className="block text-sm font-bold mb-2">Name on Card</label>
          <input type="text" placeholder="Ex-Ponraj E" className="border rounded w-full py-2 px-3" required />
        </div>
        <div className="mb-4">
          <label  className="block text-sm font-bold mb-2">Card Number</label>
          <input
            type="text"
             placeholder="****-****-****-****"
            value={cardNumber}
            onChange={handleCardNumberChange}
            className="border rounded w-full py-2 px-3"
            maxLength="19"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Expiration Date</label>
          <input type="text" placeholder="MM/YY" className="border rounded w-full py-2 px-3" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">CVV</label>
          <input type="text" placeholder="***" className="border rounded w-full py-2 px-3" required />
        </div>
        <h3 className="font-bold text-lg mb-2">Order Summary</h3>
        <ul className="mb-4">
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-between">
              <span>{item.title} (₹{item.price}) x {item.quantity}</span>
              <span>₹{(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <h3 className="font-bold">Total: ₹{totalPrice.toFixed(2)}</h3>
        <h3 className="font-bold text-green-500">Discounted Total: ₹{discountedPrice.toFixed(2)}</h3>
        <button type="submit" className="mt-4 bg-gradient-to-r from-yellow-500 to-purple-500 text-white py-2 px-4 rounded hover:bg-green-600">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
