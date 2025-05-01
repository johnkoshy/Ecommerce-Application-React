import React from 'react';

// Cart component displays the shopping cart contents
const Cart = () => {
  // Placeholder array for cart items; replace with actual data from state or API
  const cartItems = [];

  return (
    // Main container with flex column layout and spacing
    <div className="flex flex-col gap-4">
      {/* Cart title with styled text for light and dark modes */}
      <h2 className="text-xl font-semibold text-indigo-900 dark:text-teal-200">
        Shopping Cart
      </h2>
      {/* Conditional rendering based on cart items */}
      {cartItems.length === 0 ? (
        // Message displayed when cart is empty, with themed text colors
        <p className="text-coral-600 dark:text-lavender-400">
          No items in cart
        </p>
      ) : (
        // List of cart items when cart is not empty
        <ul className="space-y-2">
          {cartItems.map((item, index) => (
            // Individual cart item with unique key for React rendering
            <li key={index} className="text-indigo-900 dark:text-teal-200">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Export the Cart component as default
export default Cart;