import React from "react";
import "./Cart.css";


function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return (
    <div className="cart">
      <h2>Cart Items</h2>
      <div className="cart-items-container">
        {cart.map((item, index) => (
          <div key={index} className="cart-item-display">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <p className="cart-item-name">{item.name}</p>
              <p className="cart-item-price">₹ {item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <h3>Total: ₹ {total}</h3>
    </div>
  );
}

export default Cart;
