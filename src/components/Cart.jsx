import React from 'react';

const Cart = () => {
  const cartItems = []; // Placeholder; replace with actual data

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Shopping Cart
      </h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          No items in cart
        </p>
      ) : (
        <ul className="space-y-2">
          {cartItems.map((item, index) => (
            <li key={index} className="text-gray-800 dark:text-gray-200">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;