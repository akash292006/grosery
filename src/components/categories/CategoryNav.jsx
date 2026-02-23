import React from "react";
import { Link } from "react-router-dom";
import "./CategoryNav.css";

function CategoryNav() {
  const categories = [
    { name: "All Products", path: "/" },
    { name: "Fruits & Veggies", path: "/fruits-veggies" },
    { name: "Electronics", path: "/electronics" },
    { name: "Dairy Products", path: "/dairy-products" },
    { name: "Snacks & Drinks", path: "/snacks-drinks" },
    { name: "Household Essentials", path: "/household" },
    { name: "Kids", path: "/kids" }
  ];

  return (
    <nav className="category-nav">
      {categories.map((category, index) => (
        <Link key={index} to={category.path} className="category-item">
          {category.name}
        </Link>
      ))}
    </nav>
  );
}

export default CategoryNav;
