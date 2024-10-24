import { Link } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountedPrice = totalPrice * 0.9;

  return (
    <div className="bg-gray-200 p-6 mt-5">
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className="space-y-2">
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-between bg-white p-2 rounded shadow ">
              <span>{item.title} (₹{item.price})</span>
              <div>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-blue-600  hover:opacity-80 px-4 ">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-blue-600 bg-rgb(0, 123, 255) hover:opacity-80 px-4">+</button>
                <button onClick={() => removeFromCart(item.id)} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md px-4 py-1">Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-between mt-4">
        <h3 className="font-bold bg-yellow-400 py-2 px-2 rounded-md">Total Price: ₹{totalPrice.toFixed(2)}</h3>
       <h3 className="font-bold text-green-700">Offer Price (10% off): ₹{discountedPrice.toFixed(2)}</h3>
     </div>
     <div className="flex justify-end">
      <Link to='/Payment' className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 ">
      Proceed to Payment
      </Link>
      </div>
    </div>
  );
};

export default Cart;
