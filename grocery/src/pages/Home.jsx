import React from "react";

import Header from "../components/header/Header";
import CategoryNav from "../components/categories/CategoryNav";
import OfferBanner from "../components/banner/OfferBanner";
import HeroSection from "../components/hero/HeroSection";

function Home() {
  console.log("Home page loaded");

  return (
    <>
      <Header />
      <CategoryNav />
      <OfferBanner />
      <HeroSection />
    </>
  );
}

export default Home;
