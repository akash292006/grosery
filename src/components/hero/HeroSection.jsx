import React from "react";
import "./HeroSection.css";
import cartImage from "./cart.png";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Fresh Groceries <br />
          <span>Delivered</span> to Your Doorstep
        </h1>

        <p>
          Shop from a wide range of fresh products and get them delivered
          within 2 hours. Quality guaranteed!
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Shop Now</button>
          <button className="secondary-btn">View Trending</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={cartImage} alt="Shopping Cart" />
      </div>
    </section>
  );
}

export default HeroSection;
