import React from "react";
import Header from "../header/Header";
import "./HomePage.css";
import Booking from "../Booking";
import Footer from "../Footer";
import HeroSection from "./HeroSection";
import Location from "../howitworks/Location";
import WhyChooseUs from "../WhyChooseUs";


function HomePage() {

    return (
        <div  className="homepage  w-full  bg-gradient-to-r from-purple-500 to-pink-500 font-plus-jakarta-sans">
        
          <div>
          <Header />
             
          <HeroSection />
      
          <Booking />
          <Location />    
         <div id="choose"> <WhyChooseUs  /> </div>
          <Footer />
     
      </div>
      </div>
    
    );
}
export default HomePage;