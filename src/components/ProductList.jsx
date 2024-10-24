import Product from './Product';

const ProductList = ({ products, addToCart, removeFromCart, cartItems }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map(product => (
        <Product 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
          removeFromCart={removeFromCart} 
          cartItems={cartItems}
        />
      ))}
    </div>
  );
};

export default ProductList;
