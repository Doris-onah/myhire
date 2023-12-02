import React from "react";
import { Link, Outlet } from "react-router-dom";
import Search from "../search/Search";

function CarsHome() {
  return (
    <div className="w-[100%]  h-[100vh] bg-gradient-to-r from-purple-600 to-pink-700 font-plus-jakarta-sans  flex items-center justify-center">
      <div className="flex md:w-[90%] w-[90%] h-[90%] flex-col items-center justify-center text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
        <div className="">
          {/* larger screen section */}
          <div className="hidden md:block">
            <h1 className="text-4xl font-semibold text-white">
              Check Out Trending Car Rental Details
            </h1>

            <p className="text-center text-[16px] text-[#FFF]">
              See the Car Rental Deals Everyone is Talking About, from New{" "}
              <br /> Deals to Recurring Deals
            </p>
          </div>

          {/* smaller screen section */}
          <div className="md:hidden block">
            <h1 className="text-[20px] font-bold text-white">
              Most popular car rental deals
            </h1>
          </div>
        </div>
        <Search />
        <div className=" flex-row items-between justify-center w-full h-[100%] ">
          <div className="flex flex items-between justify-center w-[100%] ">
            <ul className="flex text-2xl text-white items-between justify-center w-[100%] my-4">
              <li className="w-full text-center  ">
                <Link to="/Cars/popularcars" className="hidden md:block">
                  Popular Car
                </Link>
                <Link to="/Cars" className="md:hidden block text-[15px]">
                  Popular
                </Link>
              </li>

              <li className="w-full text-center  ">
                <Link to="/Cars/SuvsCars" className="hidden md:block">
                  Suvs & Truck
                </Link>
                <Link
                  to="/Cars/SuvsCars"
                  className="md:hidden block text-[15px]"
                >
                  Large
                </Link>
              </li>

              <li className="w-full text-center ">
                <Link to="/Cars/SedanCars" className="hidden md:block">
                  Sedans
                </Link>
                <Link
                  to="/Cars/SedanCars"
                  className="md:hidden block text-[15px]"
                >
                  Small
                </Link>
              </li>

              <li className="w-full text-center ">
                <Link to="/Cars/ExclusiveCars" className="hidden md:block">
                  Exclusive Car
                </Link>
                <Link
                  to="/Cars/ExclusiveCars"
                  className="md:hidden block text-[15px]"
                >
                  Exclusive{" "}
                </Link>
              </li>
            </ul>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default CarsHome;
