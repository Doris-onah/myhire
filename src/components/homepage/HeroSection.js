import React from "react";
import car from "../../images/car.png";
import { useNavigate } from "react-router-dom";
function HeroSection() {
  const navigate = useNavigate()

const hire = () => {
  navigate("/")
}
  return (
    <div className=" md:h-[600px] h-[600px] w-[100%] flex items-center  justify-center ">
      <div className=" md:w-[90%]  md:h-[100%] h-[600px] flex justify-center align-center flex-col md:flex-row md:items-center md:flex md:justify-center  ">
        <div className="hidden md:block text-white h-[300px] md:h-[100%] md:w-[80%] md:flex items-center justify-center">
          <div className="laptop ">
            <h2 className=" text-[15px]">The Car Rental Service You Can Trust</h2>
            <h1 className=" md:text-5xl font-medium  uppercase ">
              LOOKING FOR A FASTER <br /> AND EASIER WAY TO HIRE <br />A
              VEHICLE?
            </h1>
            <p className=" text-[19px] ">
              In 3 min, your ride could be on its way. Our Car <br />
              online booking is designed to meet your <br />
              specific need in no time.
            </p>

            <div className="md:w-[100%] md:h[100%] pt-[60px] ">
              <button onClick={hire} className="w-[450px] h-[40px]  bg-white text-black  rounded-[5px]">
               <a href="#Cars"> Hire now!</a>
              </button>
            </div>
          </div>
        </div>

        <div className="mob md:hidden block flex justify-center items-center align-center w-[100%]">
          <span className="w-[90%] text-center">
            <h1 className=" md:text-6xl font-bold text-3xl  uppercase text-white">
              FAST AND EASIER WAY TO RENT A CAR
            </h1>
            <p className=" text-white  text-[19px] py-[10px] ">
              Our Car Rentals online system <br /> designed to meet your
              specific needs of car rental business owners.
            </p>
          </span>
        </div>

        <div className="hero-text sm:w-[100%] h-[300px] md:h-[100%] flex justify-center md:flex items-center justify-center">
          <img
            src={car}
            className="md:h-[375px] md:w-[687px] h-[186px] w-[306px] "
            alt="car"
          />
        </div>
        <div className="w-[100%] md:h[100%]  flex items-center justify-center md:hidden block">
              <button onClick={hire} className="w-[300px] h-[40px]  bg-white text-black  rounded-[5px]">
               <a href="#Cars"> Hire now! </a>
              </button>
            </div>
      </div>
    </div>
  );
}
export default HeroSection;
