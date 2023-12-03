import React from "react";
import { Link } from "react-router-dom";

function AllCars({ car, prevPage, nextPage, page, pages, index }) {
  return (
    <div
      key={index}
      className="w-[100%] h-[100%] flex justify-center items-center rounded bg-gray-100 text-gray-600 text-sm xl:text-xl 2xl:text-2xl"
    >
      <Link
        className="w-[100%] h-[90%] flex flex-col justify-center items-center"
        to={`/CarUploaded/${car.name}`}
      >
        <div className="w-[90%] h-[100%] bg-blue-200">
          <img
            key={index}
            src={car?.Photos?.photo}
            className="w-[100%] h-[100%] "
            alt="url- car"
          />
        </div>
        <div className="h-[100%] w-[90%] ">
          <h1>£ {car.estimated_price}</h1>
          <p>{car.name}</p>
          <p className="hidden md:block">{car.description}</p>
          <p className="hidden md:block">{car.location}</p>
        </div>
      </Link>
    </div>
  );
}
export default AllCars;
