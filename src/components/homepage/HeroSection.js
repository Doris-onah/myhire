import React from "react";
import car from "../../images/car.png";
import { useNavigate } from "react-router-dom";
import Search from "../Browsecars/Search";
function HeroSection() {
  const navigate = useNavigate();

  const hire = () => {
    navigate("/#cars");
  };
  return (
    <div
      id="herosection"
      className="h-[100vh]   md:w-full  w-[100%] flex items-center  justify-center "
    >
      <div className="">
        <Search />
        <div className=" md:w-[100%]  md:h-[400px] h-[100%] flex justify-center items-center flex-col md:flex-row  md:flex md:justify-center  ">
          <div className="flex-col md:flex-row w-[90%] h-[100%] flex items-center justify-between ">
            {/* this is hero write up */}
            <div className="md:w-[50%] w-[90%] h-[100%] flex items-center justify-center flex-col text-white">
              {/* this is for desktop */}
              <div className="md:block hidden  w-[90%] h-[90%] flex flex-col items-center align-center justify-center">
                <h2 className=" text-[15px] mt-[50px]">
                  The Car Rental Service You Can Trust
                </h2>
                <h1 className="text-4xl font-extrabold  ">
                  LOOKING FOR A FAST AND EASIER WAY TO HIRE A VEHICLE?
                </h1>
                <div className="mt-8">
                  <p className=" text-[18px] ">
                    In 3 min, your ride could be on its way. Our Car <br />
                    online booking is designed to meet your <br />
                    specific need in no time.
                  </p>
                </div>
                <div className="md:w-[100%] md:h[100%] pt-[60px] ">
                  <button
                    onClick={hire}
                    className="w-[450px] h-[40px]  bg-white text-black  rounded-[5px]"
                  >
                    Hire now!{/* <a href="#Cars"> Hire now!</a> */}
                  </button>
                </div>
              </div>
              {/* this is for smaller screen */}
              <div className="mob md:hidden block flex justify-center items-center align-center w-[100%] h-[100%]">
                <span className="w-[90%] text-center">
                  <h1 className=" md:text-4xl font-bold text-3xl  uppercase text-white">
                    FAST AND EASIER WAY TO HIRE A CAR
                  </h1>
                  <p className=" text-white  text-[19px] py-[10px] ">
                    Our Car online booking system <br /> designed to meet your
                    specific need in no time.
                  </p>
                </span>
              </div>
            </div>

            {/* this is hero image */}
            <div className=" md:w-[50%] w-[90%] h-[90%] flex items-center justify-center">
              <div className=" hero-text sm:w-[100%] w-[90%] h-[300px] md:h-[80%] flex md:flex items-center justify-center">
                <img
                  src={car}
                  className="md:h-[385px] md:w-[687px] h-[286px] w-[356px] "
                  alt="car"
                />
              </div>
            </div>

            <div className="md:hidden block w-[90%] md:h[100%] pt-[30px] flex items-center justify-center">
              <button
                // onClick={hire}
                className="w-[90%] h-[40px]  bg-white text-black  rounded-[5px]"
              >
                <a href="#Cars"> Hire now!</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
