import Cart from '../components/Cart';

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-blue-700">Your Cart</h1>
      <Cart 
        cartItems={cartItems} 
        removeFromCart={removeFromCart} 
        updateQuantity={updateQuantity}
      />
    </div>
  );
};

export default CartPage;
