import React, { useState } from "react";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      // Update quantity if item exists
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      ));
    } else {
      // Add new item with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCart(cart.map(item => 
      item.id === itemId 
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  return (
    <AppRoutes 
      cart={cart} 
      addToCart={addToCart} 
      removeFromCart={removeFromCart}
      updateQuantity={updateQuantity}
    />
  );
}

export default App;
