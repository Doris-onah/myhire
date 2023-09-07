import React from "react";
import Location from "../howitworks/Location";
import Booking from "../Booking";
import "../homepage/HomePage.css";



function HowItWorks() {
    return (
     <div id="howitworks"
      className="homepage  bg-gradient-to-r from-purple-600 to-pink-600 font-plus-jakarta-sans"> 
      <Location />
      <Booking />
        </div>
    );
}
export default HowItWorks;