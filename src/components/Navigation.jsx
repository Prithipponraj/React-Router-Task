import { Link } from 'react-router-dom';

const Navigation = ({ cartItems }) => {
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 flex justify-between">
        <Link  className="text-2xl" to="/">Online Shopping</Link>
        <Link className="text-2xl font-bold text-white " to='/'>Home</Link>
        <Link className='bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded' to="/cart">Cart {totalQuantity > 0 && `(${totalQuantity})`}</Link>
      </div>
    
  );
};

export default Navigation;
