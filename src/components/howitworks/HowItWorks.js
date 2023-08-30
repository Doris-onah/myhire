import React from "react";
import Header from "../header/Header";
import Footer from "../Footer";
import Location from "../howitworks/Location";
import Booking from "../Booking";


function HowItWorks() {
    return (
        
           <div className=" w-full items-center flex justify-center flex-col  bg-gradient-to-r from-purple-500 to-pink-500">
			<Header />
      <Location />
      <Booking />
          <Footer />  
        </div>
    );
}
export default HowItWorks;