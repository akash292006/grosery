import React from "react";
import OfferBanner from "../components/banner/OfferBanner";
import HeroSection from "../components/hero/HeroSection";
import ProductList from "../components/products/ProductList";
import Cart from "../components/cart/Cart";
import appleImage from "../ALLIMAGES/FruitsVeggies/apple.png";
import bananaImage from "../ALLIMAGES/FruitsVeggies/banana.png";
import orangeImage from "../ALLIMAGES/FruitsVeggies/orange.png";
import carrotImage from "../ALLIMAGES/FruitsVeggies/carrot.png";
import potatoImage from "../ALLIMAGES/FruitsVeggies/potato.png";
import tomatoImage from "../ALLIMAGES/FruitsVeggies/tomato.png";

function FruitsVeggies({ cart, addToCart }) {
  const products = [
    { id: 1, name: "Apple", price: 100, image: appleImage },
    { id: 2, name: "Banana", price: 40, image: bananaImage },
    { id: 3, name: "Orange", price: 80, image: orangeImage },
    { id: 4, name: "Carrot", price: 30, image: carrotImage },
    { id: 5, name: "Potato", price: 25, image: potatoImage },
    { id: 6, name: "Tomato", price: 35, image: tomatoImage }
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

export default FruitsVeggies;
