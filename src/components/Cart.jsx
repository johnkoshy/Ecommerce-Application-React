import React from 'react';

const Cart = () => {
  // Placeholder for cart items; replace with actual data/logic if available
  const cartItems = []; // Example: empty cart

  return (
    <div className="cart-panel">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">No items in cart</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="mb-2">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;