import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ cartCount = 0 }) {
  return (
    <header className="header">
      <div className="logo">
        🛒 <span>FreshGrocer</span>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search for products, categories..."
        />
        <button>🔍</button>
      </div>

      <div className="actions">
        <button className="login-btn">LOGIN / SIGN UP</button>
        <Link to="/mycart" className="cart-icon-container">
          <span className="cart-icon">🛒</span>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
    </header>
  );
}

export default Header;
