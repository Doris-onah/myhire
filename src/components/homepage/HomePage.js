import React from "react";
import "./HomePage.css";
import Footer from "../Footer";
import HeroSection from "./HeroSection";
import WhyChooseUs from "../WhyChooseUs";
import Review from "../Review";
import Cars from "../Browsecars/Cars";
import Search from "../Browsecars/Search";
import HowItWorks from "../howitworks/HowItWorks";
import Header from "../header/Header";
function HomePage() {
  return (
    <div
      id="home"
      className="homepage   w-[100%]  bg-gradient-to-r from-purple-600 to-pink-600 "
    >
      <div className="fixed-header">
        <Header />
      </div>

      <div className="pt-[100px]">
        <div className=" md:h-[200px] flex justify-center items-center  ">
          <div className="md:h-[150px] w-full text-center">
            {" "}
            <h1 className="md:text-4xl hidden md:block font-bold text-white">
              What are you looking for?
            </h1>
            <Search />{" "}
          </div>
        </div>
        <div className="">
          {" "}
          <HeroSection />
        </div>
        <div id="howitworks">
          <HowItWorks />
        </div>
        <div id="Cars ">
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
