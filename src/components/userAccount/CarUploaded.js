import React from "react";
import { useState } from "react";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function CarUploaded(props) {
  const [bookmark, setBookmark] = useState(false);
  const { product } = props;
  return (
    <div className="w-full ">
      <div className="bg-orange-300 w-full md:h-[656px] h-[400px] flex justify-between text-black">
        <button>
          <FiChevronLeft />
        </button>
        <img src={product?.photos?.url} alt="img" />
        <p>{product.name}</p>
        <button>
          <FiChevronRight />
        </button>
      </div>
      <div className="flex justify-center items-center w-[100%] h-[300px] bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="w-[90%] h-[80%] bg-blue-500">
          <button>next</button>
          <div></div>
        </div>
      </div>{" "}
      <div className="w-[100%] h-[50%] bg-white text-black text-center flex justify-center items-center mx-8">
        <h1> {product.name}</h1>
        <br />
        <span className="flex">
          <p>created_at: {product.created_at}</p>
          <h2>Location: {product.location}</h2>
        </span>
      </div>{" "}
      <div className="flex justify-center py-8 md:flex-row flex-col md:w-[80%] w-[90%] h-[100%] ">
        <div className="w-[50%]">
          {" "}
          <h2>description:{product.description}</h2>
          <h2>Type: {product.category}</h2>
          <h2>color: {product.color}</h2>
          <h2>Location: {product.location}</h2>
          <h2>Destinations: {product.destinations}</h2>
          <h2>Available_driver: {product.available_driver}</h2>
          <h2>last serviced : {product.last_serviced}</h2>
          <h2>Vehicle issurance: {product.is_insured}</h2>
          <h2>vehicle's Payload Capacity: {product.load_vamping}</h2>{" "}
          <h2>Load Vamping:{product.load_vamping}</h2>
          <h2>status: {product.status}</h2>
          <span className="md:w-[50%] w-[100%] flex justify-between text-black">
            <button className="bg-white h-[50px] w-[40%]">Message</button>
            <button className="bg-white h-[50px] w-[40%]">Call</button>
          </span>
        </div>

        <div>
          <div className="" onClick={() => setBookmark(!bookmark)}>
            {bookmark ? <BsFillBookmarkFill /> : <BsBookmark />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarUploaded;
