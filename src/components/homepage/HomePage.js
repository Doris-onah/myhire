import React from "react";
import "./HomePage.css";
import Footer from "../Footer";
import HeroSection from "./HeroSection";
import WhyChooseUs from "../WhyChooseUs";
import Review from "../Review";
import Cars from "../Browsecars/Cars";
import Search from "../Browsecars/Search";
import HowItWorks from "../howitworks/HowItWorks";

function HomePage() {
  return (
    <div
      id="home"
      className="homepage   w-[100%]  bg-gradient-to-r from-purple-600 to-pink-600 "
    >
      <div>
        <div className="mt-8 md:mt-[0]">
          <Search />{" "}
        </div>
        <div className="">
          {" "}
          <HeroSection />
        </div>
        <div id="howitworks">
          <HowItWorks />
        </div>
        <div id="Cars">
          <Cars />{" "}
        </div>
        <div id="choose">
          {" "}
          <WhyChooseUs />{" "}
        </div>
        <div id="Review">
          <Review />
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default HomePage;
