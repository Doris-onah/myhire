import React from "react";
import Footer from "../Footer";
import HeroSection from "../homepage/HeroSection";
import WhyChooseUs from "../WhyChooseUs";
import Review from "../Review";
import Cars from "../Browsecars/Cars";
import HowItWorks from "../howitworks/HowItWorks";
import Booking from "../Booking";
import Header from "../header/Header";
function HomePage() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="fixed w-full  top-0 bg-gradient-to-r from-purple-600 to-pink-600">
        <Header />
      </div>
      <HeroSection />
      <Booking />
      <HowItWorks />
      <Cars />
      <WhyChooseUs />
      <Review />
      <Footer />
    </div>
  );
}
export default HomePage;
