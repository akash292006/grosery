import React from "react";
import "./Cart.css";


function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">

      <h2>Cart Items</h2>
      {cart.map((item, index) => (
        <p key={index}>
          {item.name} - ₹ {item.price}
        </p>
      ))}
      <h3>Total: ₹ {total}</h3>
    </div>
  );
}

export default Cart;
