import React from "react";
import Header from "../header/Header";
import "./HomePage.css";
import Booking from "../Booking";
import Footer from "../Footer";
import HeroSection from "./HeroSection";
import Location from "../howitworks/Location";
import WhyChooseUs from "../WhyChooseUs";
import Review from "../Review";
import Cars from "../Browsecars/Cars"


function HomePage() {

    return (
        <div  className="homepage  w-full  bg-gradient-to-r from-purple-600 to-pink-600 font-plus-jakarta-sans">
        
          <div >
         <Header /> 
             
         <HeroSection />
      
          <Booking />
          <Location />  
          <div id="Cars"><Cars /> </div>
          {/* <RentalDetails />  */}
         <div id="choose"> <WhyChooseUs  /> </div>
         <div id="Review"><Review/></div>
          <Footer />
     
      </div>
      </div>
    
    );
}
export default HomePage;