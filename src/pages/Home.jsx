import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';

const Home = ({ addToCart, removeFromCart, cartItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto">
      
      <ProductList 
        products={products} 
        addToCart={addToCart} 
        removeFromCart={removeFromCart} 
        cartItems={cartItems}
      />
    </div>
  );
};

export default Home;
