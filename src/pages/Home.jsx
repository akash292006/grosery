import React, { useState } from "react";
import Header from "../components/header/Header";
import CategoryNav from "../components/categories/CategoryNav";
import OfferBanner from "../components/banner/OfferBanner";
import HeroSection from "../components/hero/HeroSection";
import ProductList from "../components/products/ProductList";
import Cart from "../components/cart/Cart";

function Home() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Apple", price: 100 },
    { id: 2, name: "Milk", price: 50 },
    { id: 3, name: "Bread", price: 40 }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Header />
      <CategoryNav />
      <OfferBanner />
      <HeroSection />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} />
    </>
  );
}

export default Home;
