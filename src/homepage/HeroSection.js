import React from "react";
import car from "../images/car.png";
import { useNavigate } from "react-router-dom";
function HeroSection() {
  const navigate = useNavigate();

  const hire = () => {
    navigate("/cars");
  };
  return (
    <div
      id="herosection"
      className="h-[70vh] sm:h-[80vh]  w-[100%] flex justify-center items-end  bg-gradient-to-r from-purple-600 to-pink-700"
    >
      <div className=" w-[90%] h-[80%] sm:h-[80%] flex items-center justify-center flex-col md:flex-row text-white">
        {/* this is hero write up */}{" "}
        <div className="flex flex-col justify-center items-center md:w-[90%] w-100% md:h-[100%] h-[100%] md:text-start text-center">
          <div className="w-[100%] md:h-[80%] h-[90%] flex justify-between flex-col">
            {" "}
            <h2 className=" text-[15px] hidden md:block">
              The Car Rental Service You Can Trust
            </h2>{" "}
            <div className="w-[100%] md:h-[50%] h-[100%]  flex  flex-col">
              <h1 className="text-4xl font-extrabold hidden md:block ">
                LOOKING FOR A FAST AND EASIER WAY TO HIRE A VEHICLE?
              </h1>{" "}
              <h1 className=" md:hidden block  font-bold text-3xl  uppercase text-white">
                FAST AND EASIER WAY TO HIRE A CAR
              </h1>
              {/* </div> */}
              {/* <div className="bg-green-800 w-[100%] md:h-[50%] h-[100%]  flex justify-between flex-col"> */}
              <p className=" text-[18px] hidden md:block">
                In 3 min, your ride could be on its way. Our Car <br />
                online booking is designed to meet your <br />
                specific need in no time.
              </p>{" "}
              <p className=" text-white  text-[18px] block md:hidden">
                Our Car online booking system designed to meet your specific
                need in no time.
              </p>{" "}
            </div>
            <div className="md:w-[40%] md:h[100%] bg-blue-700 hidden md:block">
              <button
                onClick={hire}
                className="w-[450px] h-[40px]  bg-white text-black  rounded-[5px]"
              >
                Hire now!
              </button>
            </div>
          </div>
        </div>
        {/* this is hero image */}
        <div className="md:w-[100%] w-[100%] h-[80%] md:h-[80%]  flex items-center justify-center">
          <div className=" hero-text sm:w-[100%] w-[90%] h-[100%] sm:h-[80%] flex md:flex items-center justify-center">
            <img
              src={car}
              className="md:h-[385px] md:w-[687px] h-[100%] w-[356px] "
              alt="car"
            />
          </div>
        </div>
        <div className="md:hidden block w-[90%] md:h[100%]  flex items-center justify-center">
          <button
            onClick={hire}
            className="w-[90%] h-[40px]  bg-white text-black  rounded-[5px]"
          >
            Hire now!
          </button>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
