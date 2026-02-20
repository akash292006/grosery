import React from "react";
import "./CategoryNav.css";

function CategoryNav() {
  const categories = [
    "All Products",
    "Fruits & Veggies",
    "Electronics",
    "Dairy Products",
    "Snacks & Drinks",
    "Household Essentials",
    "Kids"
  ];

  return (
    <nav className="category-nav">
      {categories.map((category, index) => (
        <span key={index} className="category-item">
          {category}
        </span>
      ))}
    </nav>
  );
}

export default CategoryNav;
