import React from "react";
import OfferBanner from "../components/banner/OfferBanner";
import HeroSection from "../components/hero/HeroSection";
import ProductList from "../components/products/ProductList";
import Cart from "../components/cart/Cart";
import chipsImage from "../ALLIMAGES/SnacksDrinks/chips.png";
import biscuitsImage from "../ALLIMAGES/SnacksDrinks/biscuits.png";
import softdrinkImage from "../ALLIMAGES/SnacksDrinks/softdrink.png";
import juiceImage from "../ALLIMAGES/SnacksDrinks/juice.png";
import chocolateImage from "../ALLIMAGES/SnacksDrinks/chocolate.png";
import namkeenImage from "../ALLIMAGES/SnacksDrinks/namkeen.png";

function SnacksDrinks({ cart, addToCart }) {
  const products = [
    { id: 1, name: "Chips", price: 30, image: chipsImage },
    { id: 2, name: "Biscuits", price: 40, image: biscuitsImage },
    { id: 3, name: "Soft Drink", price: 35, image: softdrinkImage },
    { id: 4, name: "Juice", price: 50, image: juiceImage },
    { id: 5, name: "Chocolate", price: 50, image: chocolateImage },
    { id: 6, name: "Namkeen", price: 45, image: namkeenImage }
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

export default SnacksDrinks;
