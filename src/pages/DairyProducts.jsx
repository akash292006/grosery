import React from "react";
import OfferBanner from "../components/banner/OfferBanner";
import HeroSection from "../components/hero/HeroSection";
import ProductList from "../components/products/ProductList";
import Cart from "../components/cart/Cart";
import milkImage from "../ALLIMAGES/Dairy/milk.png";
import cheeseImage from "../ALLIMAGES/Dairy/cheese.png";
import yogurtImage from "../ALLIMAGES/Dairy/yogurt.png";
import butterImage from "../ALLIMAGES/Dairy/butter.png";
import curdImage from "../ALLIMAGES/Dairy/curd.png";
import paneerImage from "../ALLIMAGES/Dairy/paneer.png";

function DairyProducts({ cart, addToCart }) {
  const products = [
    { id: 1, name: "Milk", price: 50, image: milkImage },
    { id: 2, name: "Cheese", price: 150, image: cheeseImage },
    { id: 3, name: "Yogurt", price: 60, image: yogurtImage },
    { id: 4, name: "Butter", price: 80, image: butterImage },
    { id: 5, name: "Curd", price: 40, image: curdImage },
    { id: 6, name: "Paneer", price: 120, image: paneerImage }
  ];

  return (
    <>
      <OfferBanner />
      <HeroSection />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} />
    </>
  );
}

export default DairyProducts;
