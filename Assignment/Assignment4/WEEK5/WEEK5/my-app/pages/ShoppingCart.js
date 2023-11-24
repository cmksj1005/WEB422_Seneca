import { useState, useEffect } from 'react';

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
