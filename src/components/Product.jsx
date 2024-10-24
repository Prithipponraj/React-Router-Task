const Product = ({ product, addToCart, removeFromCart, cartItems }) => {
  const inCart = cartItems.find(item => item.id === product.id);

  return (
    <div className="">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <h3 className="font-bold text-blue-800">{product.title}</h3>
      <p>₹{product.price}</p>
      <button
        onClick={() => (inCart ? removeFromCart(product.id) : addToCart(product))}
        className={`hover:bg-gradient-to-r from-purple-500 to-pink-500 bg-blue-500 text-white px-4 py-2 rounded mt-2`}
      >
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default Product;
