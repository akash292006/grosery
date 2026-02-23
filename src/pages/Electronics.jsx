import React from "react";
import OfferBanner from "../components/banner/OfferBanner";
import HeroSection from "../components/hero/HeroSection";
import ProductList from "../components/products/ProductList";
import Cart from "../components/cart/Cart";
import laptopImage from "../ALLIMAGES/Electronics/laptop.png";
import phoneImage from "../ALLIMAGES/Electronics/phone.png";
import headphonesImage from "../ALLIMAGES/Electronics/headphones.png";
import tvImage from "../ALLIMAGES/Electronics/tv.png";
import watchImage from "../ALLIMAGES/Electronics/watch.png";
import tabletImage from "../ALLIMAGES/Electronics/tablet.png";

function Electronics({ cart, addToCart }) {
  const products = [
    { id: 1, name: "Laptop", price: 45000, image: laptopImage },
    { id: 2, name: "Smartphone", price: 15000, image: phoneImage },
    { id: 3, name: "Headphones", price: 2500, image: headphonesImage },
    { id: 4, name: "Smart TV", price: 25000, image: tvImage },
    { id: 5, name: "Smart Watch", price: 3500, image: watchImage },
    { id: 6, name: "Tablet", price: 12000, image: tabletImage }
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

export default Electronics;
