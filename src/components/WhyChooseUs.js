import "./WhyChoose.css";
import { IoCallSharp } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import { ImPriceTags } from "react-icons/im";
import logo from "../images/logo.png"

function WhyChooseUs() {
  return (
    <div
      id="choose"
      className="why bg-gradient-to-r from-purple-700 to-pink-600">
     <div className="whychooseus">
        <div className="box1 ">
          <h1 className="text-4xl md:block hidden">THIS IS WHAT STANDS US OUT</h1>
          <h1 className="md:hidden block">Why choose us</h1>
          <p className="text-[15px] md:block hidden">
            Asides being able to meet your need in 3 minutes in just 3 steps,
            you can count on our RELIABILITY, AFFORDABILITY and ACCESSIBILITY
          </p>
          <p className="md:hidden block">A high-performing web-based car rental system for any rent-a-car company and website
        </p> 
        </div>

          <div className="box3">
            <div className="md:block hidden img-logo flex  items-center justify-center w-[30%]">
             <div className=" w-[90%] h-[400px] bg-black rounded-[15px] flex items-center justify-center "> 
              <img src={logo} width="100%" height="100%" alt="fghjk" />
             </div>
            </div>

            <div className="box3-section2">

              <div className="section2 ">
                <div className="icon-3-tag ">
                  <IoCallSharp />
                </div>
                <div className="icon-text ml-6">
                  <h1 className="text-3xl hidden md:block">Reliable Customer Support</h1>
                  <h1 className="md:hidden text-2xl">Customer Support</h1>
                  <p className="md:block hidden">
                    We are all about the little details. We provide 24/7
                    friendly and responsive Customer
                    <br />
                    Care Service that gives you in-depth guidance, at no cost at
                    all.
                  </p>
                  <p className="md:hidden block">
                    We provide 24/7 friendly and responsive Customer services.
                    
                  </p>
                </div>
              </div>

              <div className="section2 ">
                <div className="icon-3-tag ">
                  <ImPriceTags />
                </div>
                <div className="icon-text ml-6">
                  <h1 className="text-3xl md:block hidden">Best Market Prices</h1>
                  <h1 className="md:hidden block text-2xl">Best Price Guarantted</h1>
                  <p className="md:block hidden">
                    With no hidden charge, we give you the best value for your
                    money at the lowest cost possible.
                  </p>
                  <p className="md:hidden block ">
                   we give you the best value for your
                    money at low cost.
                  </p>
                </div>
              </div>

              <div className="section2">
                <div className="icon-3-tag mr-4">
                  <HiLocationMarker />
                </div>
                <div className="icon-text ">
                  <h1 className="text-3xl md:block hidden">Accessibility</h1>
                  <h1 className="text-2xl md:hidden block">Many Location</h1>
                  <p className="md:block hidden">
                  We pick-up and drop-off at any location, any day, any time.
                  we're at your service.
                  </p>
                  <p className="md:hidden block">
                  We pick-up and drop-off at any location, any day, any time
                  </p>
                </div>
              </div>
            </div>
          
        </div>
      </div>

     
    </div>
  );
}
export default WhyChooseUs;
