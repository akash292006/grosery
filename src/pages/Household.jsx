import React from "react";
import OfferBanner from "../components/banner/OfferBanner";
import HeroSection from "../components/hero/HeroSection";
import ProductList from "../components/products/ProductList";
import Cart from "../components/cart/Cart";
import detergentImage from "../ALLIMAGES/Household/detergent.png";
import soapImage from "../ALLIMAGES/Household/soap.png";
import shampooImage from "../ALLIMAGES/Household/shampoo.png";
import toothpasteImage from "../ALLIMAGES/Household/toothpaste.png";
import brushImage from "../ALLIMAGES/Household/brush.png";
import cleanerImage from "../ALLIMAGES/Household/cleaner.png";

function Household({ cart, addToCart }) {
  const products = [
    { id: 1, name: "Detergent", price: 150, image: detergentImage },
    { id: 2, name: "Soap", price: 40, image: soapImage },
    { id: 3, name: "Shampoo", price: 180, image: shampooImage },
    { id: 4, name: "Toothpaste", price: 100, image: toothpasteImage },
    { id: 5, name: "Brush", price: 50, image: brushImage },
    { id: 6, name: "Cleaner", price: 120, image: cleanerImage }
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

export default Household;
