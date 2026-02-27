import React from "react";
import "./Header.css";

function Header() {
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
        <span className="cart-icon">🛒</span>
      </div>
    </header>
  );
}

export default Header;
