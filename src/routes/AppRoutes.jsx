import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Electronics from "../pages/Electronics";
import FruitsVeggies from "../pages/FruitsVeggies";
import DairyProducts from "../pages/DairyProducts";
import SnacksDrinks from "../pages/SnacksDrinks";
import Household from "../pages/Household";
import Kids from "../pages/Kids";
import Header from "../components/header/Header";
import CategoryNav from "../components/categories/CategoryNav";

function PageWrapper({ children, cartCount }) {
  return (
    <>
      <Header cartCount={cartCount} />
      <CategoryNav />
      {children}
    </>
  );
}

function AppRoutes({ cart, addToCart }) {
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageWrapper cartCount={cartCount}><Home cart={cart} addToCart={addToCart} /></PageWrapper>} />
        <Route path="/electronics" element={<PageWrapper cartCount={cartCount}><Electronics cart={cart} addToCart={addToCart} /></PageWrapper>} />
        <Route path="/fruits-veggies" element={<PageWrapper cartCount={cartCount}><FruitsVeggies cart={cart} addToCart={addToCart} /></PageWrapper>} />
        <Route path="/dairy-products" element={<PageWrapper cartCount={cartCount}><DairyProducts cart={cart} addToCart={addToCart} /></PageWrapper>} />
        <Route path="/snacks-drinks" element={<PageWrapper cartCount={cartCount}><SnacksDrinks cart={cart} addToCart={addToCart} /></PageWrapper>} />
        <Route path="/household" element={<PageWrapper cartCount={cartCount}><Household cart={cart} addToCart={addToCart} /></PageWrapper>} />
        <Route path="/kids" element={<PageWrapper cartCount={cartCount}><Kids cart={cart} addToCart={addToCart} /></PageWrapper>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
