import React from "react";
// import { useState } from "react";
// import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function CarDetails(props) {
  const { product } = props;
  // const [bookmark, setBookmark] = useState(false);
  return (
    <div className="w-full flex h-[90%] justify-center items-center">
      {product && (
        <div className=" flex justify-center w-[90%] h-[90%] flex-col ">
          <div className="w-full flex justify-center h-[100%]">
            <div className="bg-white w-[90%]  h-[100%] flex justify-between  text-black">
              <button>
                <FiChevronLeft />
              </button>
              <img src={product?.image} alt="displaying the car" />

              <button>
                <FiChevronRight />
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center w-[100%] h-[100%] bg-gradient-to-r from-purple-600 to-pink-600">
            <div className="w-[90%] h-[80%] bg-blue-500">
              <button>next</button>
              <div></div>
            </div>
          </div>

          <div className="w-[100%] h-[50%] bg-[#f8f8f8] text-black text-center flex justify-center items-center ">
            <div className="">
              <div>
                <h1> {product.name}</h1>
              </div>
              <div className="flex justify-center gap-6">
                <p>posted: {product.created_at}</p>
                <h2>Location: {product.location}</h2>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center  md:flex-row flex-col  w-[100%] h-[100%] ">
            <div className="w-[90%] text-white ">
              <h2>description:{product.description}</h2>
              <h2>Type: {product.category}</h2>
              <h2>
                color:
                {product.color}
              </h2>{" "}
              <h2>status: {product.status}</h2>
              <h2>Location: {product.location}</h2>
              <h2>load restrictions: {product.load_restrictions}</h2>
              <h2>Available driver: {product.available_driver}</h2>
              <h2>last serviced : {product.last_serviced}</h2>
              <h2>Vehicle issurance: {product.is_insured}</h2>
              <h2>Load Vamping:{product.load_vamping}</h2>
              <span className="md:w-[50%] w-[100%] flex justify-between text-black">
                <button className="bg-white h-[50px] w-[40%]">Message</button>
                <button className="bg-white h-[50px] w-[40%]">Call</button>
              </span>
            </div>
            {/* <div>
              <div className="" onClick={() => setBookmark(!bookmark)}>
                {bookmark ? <BsFillBookmarkFill /> : <BsBookmark />}
              </div>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
export default CarDetails;
