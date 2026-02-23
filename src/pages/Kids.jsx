import React from "react";
import OfferBanner from "../components/banner/OfferBanner";
import HeroSection from "../components/hero/HeroSection";
import ProductList from "../components/products/ProductList";
import Cart from "../components/cart/Cart";
import toysImage from "../ALLIMAGES/Kids/toys.png";
import diapersImage from "../ALLIMAGES/Kids/dispers.png";
import babyfoodImage from "../ALLIMAGES/Kids/babyfood.png";
import kidsclothingImage from "../ALLIMAGES/Kids/kidsclothing.png";
import schoolsuppliesImage from "../ALLIMAGES/Kids/schoolsupplies.png";
import booksImage from "../ALLIMAGES/Kids/books.png";

function Kids({ cart, addToCart }) {
  const products = [
    { id: 1, name: "Toys", price: 500, image: toysImage },
    { id: 2, name: "Diapers", price: 300, image: diapersImage },
    { id: 3, name: "Baby Food", price: 250, image: babyfoodImage },
    { id: 4, name: "Kids Clothing", price: 450, image: kidsclothingImage },
    { id: 5, name: "School Supplies", price: 200, image: schoolsuppliesImage },
    { id: 6, name: "Books", price: 150, image: booksImage }
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

export default Kids;
