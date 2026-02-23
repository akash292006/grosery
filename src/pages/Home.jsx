import React, { useState } from "react";
import OfferBanner from "../components/banner/OfferBanner";
import HeroSection from "../components/hero/HeroSection";
import ProductList from "../components/products/ProductList";
import Cart from "../components/cart/Cart";

// Home category images (from ALLIMAGES)
import appleHome from "../ALLIMAGES/FruitsVeggies/apple.png";
import milkHome from "../ALLIMAGES/Dairy/milk.png";
import breadHome from "../ALLIMAGES/Grocery/bread.png";

// Snacks & Drinks images
import chipsImage from "../ALLIMAGES/SnacksDrinks/chips.png";
import biscuitsImage from "../ALLIMAGES/SnacksDrinks/biscuits.png";
import softdrinkImage from "../ALLIMAGES/SnacksDrinks/softdrink.png";
import juiceImage from "../ALLIMAGES/SnacksDrinks/juice.png";
import chocolateImage from "../ALLIMAGES/SnacksDrinks/chocolate.png";
import namkeenImage from "../ALLIMAGES/SnacksDrinks/namkeen.png";

// Kids category images
import toysImage from "../ALLIMAGES/Kids/toys.png";
import diapersImage from "../ALLIMAGES/Kids/dispers.png";
import babyfoodImage from "../ALLIMAGES/Kids/babyfood.png";
import kidsclothingImage from "../ALLIMAGES/Kids/kidsclothing.png";
import schoolsuppliesImage from "../ALLIMAGES/Kids/schoolsupplies.png";
import booksImage from "../ALLIMAGES/Kids/books.png";

// Dairy products images
import milkDairy from "../ALLIMAGES/Dairy/milk.png";
import cheeseImage from "../ALLIMAGES/Dairy/cheese.png";
import yogurtImage from "../ALLIMAGES/Dairy/yogurt.png";
import butterImage from "../ALLIMAGES/Dairy/butter.png";
import curdImage from "../ALLIMAGES/Dairy/curd.png";
import paneerImage from "../ALLIMAGES/Dairy/paneer.png";

// Fruits & Veggies images
import appleFV from "../ALLIMAGES/FruitsVeggies/apple.png";
import bananaImage from "../ALLIMAGES/FruitsVeggies/banana.png";
import orangeImage from "../ALLIMAGES/FruitsVeggies/orange.png";
import carrotImage from "../ALLIMAGES/FruitsVeggies/carrot.png";
import potatoImage from "../ALLIMAGES/FruitsVeggies/potato.png";
import tomatoImage from "../ALLIMAGES/FruitsVeggies/tomato.png";

// Household images
import detergentImage from "../ALLIMAGES/Household/detergent.png";
import soapImage from "../ALLIMAGES/Household/soap.png";
import shampooImage from "../ALLIMAGES/Household/shampoo.png";
import toothpasteImage from "../ALLIMAGES/Household/toothpaste.png";
import brushImage from "../ALLIMAGES/Household/brush.png";
import cleanerImage from "../ALLIMAGES/Household/cleaner.png";

// Electronics images
import laptopImage from "../ALLIMAGES/Electronics/laptop.png";
import phoneImage from "../ALLIMAGES/Electronics/phone.png";
import headphonesImage from "../ALLIMAGES/Electronics/headphones.png";
import tvImage from "../ALLIMAGES/Electronics/tv.png";
import watchImage from "../ALLIMAGES/Electronics/watch.png";
import tabletImage from "../ALLIMAGES/Electronics/tablet.png";

function Home() {
  const [cart, setCart] = useState([]);

  const products = [
    // Home category
    { id: 1, name: "Apple", price: 100, image: appleHome, category: "Home" },
    { id: 2, name: "Milk", price: 50, image: milkHome, category: "Home" },
    { id: 3, name: "Bread", price: 40, image: breadHome, category: "Home" },
    
    // Snacks & Drinks
    { id: 4, name: "Chips", price: 30, image: chipsImage, category: "Snacks & Drinks" },
    { id: 5, name: "Biscuits", price: 40, image: biscuitsImage, category: "Snacks & Drinks" },
    { id: 6, name: "Soft Drink", price: 35, image: softdrinkImage, category: "Snacks & Drinks" },
    { id: 7, name: "Juice", price: 50, image: juiceImage, category: "Snacks & Drinks" },
    { id: 8, name: "Chocolate", price: 50, image: chocolateImage, category: "Snacks & Drinks" },
    { id: 9, name: "Namkeen", price: 45, image: namkeenImage, category: "Snacks & Drinks" },
    
    // Kids
    { id: 10, name: "Toys", price: 500, image: toysImage, category: "Kids" },
    { id: 11, name: "Diapers", price: 300, image: diapersImage, category: "Kids" },
    { id: 12, name: "Baby Food", price: 250, image: babyfoodImage, category: "Kids" },
    { id: 13, name: "Kids Clothing", price: 450, image: kidsclothingImage, category: "Kids" },
    { id: 14, name: "School Supplies", price: 200, image: schoolsuppliesImage, category: "Kids" },
    { id: 15, name: "Books", price: 150, image: booksImage, category: "Kids" },
    
    // Dairy Products
    { id: 16, name: "Milk", price: 50, image: milkDairy, category: "Dairy" },
    { id: 17, name: "Cheese", price: 150, image: cheeseImage, category: "Dairy" },
    { id: 18, name: "Yogurt", price: 60, image: yogurtImage, category: "Dairy" },
    { id: 19, name: "Butter", price: 80, image: butterImage, category: "Dairy" },
    { id: 20, name: "Curd", price: 40, image: curdImage, category: "Dairy" },
    { id: 21, name: "Paneer", price: 120, image: paneerImage, category: "Dairy" },
    
    // Fruits & Veggies
    { id: 22, name: "Apple", price: 100, image: appleFV, category: "Fruits & Veggies" },
    { id: 23, name: "Banana", price: 40, image: bananaImage, category: "Fruits & Veggies" },
    { id: 24, name: "Orange", price: 80, image: orangeImage, category: "Fruits & Veggies" },
    { id: 25, name: "Carrot", price: 30, image: carrotImage, category: "Fruits & Veggies" },
    { id: 26, name: "Potato", price: 25, image: potatoImage, category: "Fruits & Veggies" },
    { id: 27, name: "Tomato", price: 35, image: tomatoImage, category: "Fruits & Veggies" },
    
    // Household
    { id: 28, name: "Detergent", price: 150, image: detergentImage, category: "Household" },
    { id: 29, name: "Soap", price: 40, image: soapImage, category: "Household" },
    { id: 30, name: "Shampoo", price: 180, image: shampooImage, category: "Household" },
    { id: 31, name: "Toothpaste", price: 100, image: toothpasteImage, category: "Household" },
    { id: 32, name: "Brush", price: 50, image: brushImage, category: "Household" },
    { id: 33, name: "Cleaner", price: 120, image: cleanerImage, category: "Household" },
    
    // Electronics
    { id: 34, name: "Laptop", price: 45000, image: laptopImage, category: "Electronics" },
    { id: 35, name: "Smartphone", price: 15000, image: phoneImage, category: "Electronics" },
    { id: 36, name: "Headphones", price: 2500, image: headphonesImage, category: "Electronics" },
    { id: 37, name: "Smart TV", price: 25000, image: tvImage, category: "Electronics" },
    { id: 38, name: "Smart Watch", price: 3500, image: watchImage, category: "Electronics" },
    { id: 39, name: "Tablet", price: 12000, image: tabletImage, category: "Electronics" }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <OfferBanner />
      <HeroSection />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} />
    </>
  );
}

export default Home;
