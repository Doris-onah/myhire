import React from "react";

import "../Browsecars/AllCar.css";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { useContext } from "react";
import { FormContext } from "../userAccount/FormContext";
import { Link } from "react-router-dom";

function AllCars() {
  const { cars, PER_PAGE, skip, prevPage, nextPage, page, pages } =
    useContext(FormContext);

  return (
    <div id="PopularCars">
      <div className="flex w-full h-[100%]   md:grid md:grid-cols-4 gap-4 grid grid-cols-1">
        {cars?.slice(skip, skip + PER_PAGE).map((car, index) => {
          return (
            <div
              className=" md:w-[100%] md:h-[100%] h-[250px] bg-gray-200 md:bg-inherit  rounded-[20px] flex items-center justify-center "
              key={`${car.id}_${index}`}
            >
              <div className="flex md:flex-col items-center justify-center w-[95%] h-[90%] rounded-[20px] md:rounded-0 md:bg-inherit">
                <div className=" md:w-full w-[65%] md:h-[100%] h-[100%] flex items-center justify-center">
                  {" "}
                  <Link to={`/CarUploaded/${car.name}`}>
                    <div className="w-[100%] bg-red-400   h-[100%] flex items-center justify-center">
                      <img
                        key={index}
                        src={car?.image}
                        className="md:w-full w-[100%] h-[100%] md:rounded-[15px]"
                        alt="url"
                      />
                    </div>
                  </Link>
                </div>

                {/* for big screen section */}

                <div className="md:block hidden  flex md:w-[100%] items-center md:justify-center md:relative md:bottom-[60px]">
                  <div className="w-[100%] h-[40px] flex items-center justify-around">
                    <button className="text-[15px] bg-white h-[40px] w-[100px]">
                      CALL NOW
                    </button>
                    <button className="text-[15px] bg-white h-[40px] w-[100px]">
                      MESSAGE
                    </button>{" "}
                  </div>
                </div>

                {/* for mobile section */}
                <div className=" md:hidden block text-[18px] flex  w-[80%] h-[100%]  items-center justify-end ">
                  <div className=" w-[90%] h-[100%] flex flex-col items-center justify-center ">
                    <div className="w-[100%] h-[70%]">
                      <h1>
                        {car.name} <br />${car.estimated_price}
                      </h1>
                    </div>
                    <div className="w-[100%] h-[80%]">
                      <span className="w-[100%] h-[100%] flex flex-col justify-center gap-4">
                        <div className="flex items-center ">
                          <span className="flex gap-2  items-center justify-center">
                            <SlCalender /> <p>{car.category}</p>
                          </span>
                        </div>
                        <div className="flex items-center ">
                          <span className="flex gap-2 items-center justify-center">
                            <FaLocationDot /> <p>{car.location}</p>
                          </span>
                        </div>
                      </span>
                    </div>

                    <div className="w-[100%] h-[50%] flex items-center justify-center">
                      <div className="btn flex justify-between w-[100%] h-[40%] text-white">
                        <button className=" rounded-[20px]  bg-gradient-to-r from-purple-800 to-pink-600 w-[90px] h-[40px]  text-[12px]">
                          Message
                        </button>
                        <button className="rounded-[20px] bg-gradient-to-r from-purple-800 to-pink-600  w-[90px] h-[40px] text-[12px]">
                          Place Call
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* /* pagination*/}
      <div className="flex items-center justify-center mt-8">
        {" "}
        <button
          className="text-[15px] bg-white h-[40px] w-[100px]"
          onClick={prevPage}
          disabled={page <= 1}
        >
          Prev
        </button>{" "}
        <button
          className="text-[15px] bg-white h-[40px] w-[100px]"
          onClick={nextPage}
          disabled={page >= pages}
          aria-disabled={page >= pages}
        >
          N e x t
        </button>
      </div>
    </div>
  );
}
export default AllCars;
