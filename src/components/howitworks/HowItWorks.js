import React from "react";
import Header from "../header/Header";
import Footer from "../Footer";
import Location from "../howitworks/Location";
import Booking from "../Booking";
import "../homepage/HomePage.css";


function HowItWorks() {
    return (
         <div className="homepage  bg-gradient-to-r from-purple-600 to-pink-600 font-plus-jakarta-sans">
	 <div> <Header /> </div>
       <div>
      <Location />
      <Booking />
          <Footer />  
        </div>
        </div>
    );
}
export default HowItWorks;