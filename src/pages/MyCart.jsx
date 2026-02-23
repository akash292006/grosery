import React from "react";
import { Link } from "react-router-dom";

function MyCart({ cart, removeFromCart, updateQuantity }) {
  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const handleQuantityChange = (itemId, change) => {
    const item = cart.find(i => i.id === itemId);
    if (item) {
      const newQty = (item.quantity || 1) + change;
      if (newQty <= 0) {
        removeFromCart(itemId);
      } else {
        updateQuantity(itemId, newQty);
      }
    }
  };

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="mycart-container">
      {cart.length === 0 ? (
        <div className="cart-empty">
          <div className="cart-empty-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add items to your cart to see them here</p>
          <Link to="/" className="continue-shopping-btn">Continue Shopping</Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items-section">
            <div className="cart-header">
              <h2>My Cart ({totalItems} items)</h2>
            </div>
            
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="item-category">{item.category}</p>
                  <div className="item-price">₹{item.price}</div>
                </div>
                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button 
                      className="qty-btn" 
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="qty-value">{item.quantity || 1}</span>
                    <button 
                      className="qty-btn" 
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
                <div className="cart-item-total">
                  <span className="total-label">Total:</span>
                  <span className="total-price">₹{item.price * (item.quantity || 1)}</span>
                </div>
              </div>
            ))}
            
            <div className="place-order-section">
              <button className="place-order-btn">
                Place Order
              </button>
            </div>
          </div>
          
          <div className="cart-summary-section">
            <div className="price-details">
              <h3>Price Details</h3>
              <div className="price-row">
                <span>Price ({totalItems} items)</span>
                <span>₹{total}</span>
              </div>
              <div className="price-row">
                <span>Delivery</span>
                <span className="free-delivery">Free</span>
              </div>
              <div className="price-row total">
                <span>Total Amount</span>
                <span>₹{total}</span>
              </div>
              <div className="savings-message">
                You will save ₹0 on this order
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyCart;
