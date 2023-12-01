import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../homepage/HeroSection";
import ReviewHome from "../homepage/ReviewHome";
import Booking from "../components/Booking";
import Header from "../header/Header";
import HowitworkHome from "./HowitworkHome";
import CarsHome from "../homepage/CarsHome";
import WhychooseHome from "./WhychooseHome";
function HomePage() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="fixed w-[100%]  top-0 bg-gradient-to-r from-purple-600 to-pink-600">
        <Header />
      </div>
      <HeroSection />
      <Booking />
      <HowitworkHome />
      <CarsHome />
      <WhychooseHome />
      <ReviewHome />
      <Footer />
    </div>
  );
}
export default HomePage;
