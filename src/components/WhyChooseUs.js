import "./WhyChoose.css";
import { IoCallSharp } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import { ImPriceTags } from "react-icons/im";

function WhyChooseUs() {
  return (
    <div
      id="choose"
      className="why bg-gradient-to-r from-purple-500 to-pink-600"
    >
      {/* <Header /> */}
      <div className="whychooseus ">
        <div className="box1">
          <h1>THIS IS WHAT STANDS US OUT</h1>
          <p>
            Asides being able to meet your need in 3 minutes in just 3 steps,
            you can count on our RELIABILITY, AFFORDABILITY and ACCESSIBILITY
          </p>
        </div>
        <div className="box2">
          <div className="box3">
            <div className="image">
              <img src="./images/car.png" alt="fghjk" />
            </div>
            <div className="box3-section2">
              <div className="section2">
                <div className="icon-3">
                  <IoCallSharp />
                </div>
                <div className="icon-text">
                  <h1>Reliable Customer Support</h1>
                  <p>
                    We are all about the little details. We provide 24/7
                    friendly and responsive Customer
                    <br />
                    Care Service that gives you in-depth guidance, at no cost at
                    all
                  </p>
                </div>
              </div>

              <div className="section2">
                <div className="icon-3">
                  <ImPriceTags />
                </div>
                <div className="icon-text">
                  <h1>Best Market Prices</h1>
                  <p>
                    With no hidden charge, we give you the best value for your
                    money at the lowest cost possible
                  </p>
                </div>
              </div>

              <div className="section2">
                <div className="icon-3">
                  <HiLocationMarker />
                </div>
                <div className="icon-text">
                  <h1>Accessibility</h1>
                  <p>
                    We are all about the little details. We provide 24/7
                    friendly and responsive Customer
                    <br />
                    Care Service that gives you in-depth guidance, at no cost at
                    all
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="small-screen">
        <div></div>
      </div>
    </div>
  );
}
export default WhyChooseUs;
