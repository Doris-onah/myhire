import React from "react";
import Footer from "../Footer";
import Search from "../Browsecars/Search";
import { useContext } from "react";
import { FormContext } from "../userAccount/FormContext";
import CarUploaded from "./CarUploaded";
function CarDetails() {
  const currentDate = new Date();

  const { formData } = useContext(FormContext);
  return (
    <div className="w-full h-[100%] text-white">
      <div className="w-full h-[100%] bg-gradient-to-r from-purple-600 to-pink-600 ">
        <div className="py-8">
          {" "}
          <Search />
        </div>
        <div className="w-full h-[100%] flex items-center align-center flex-col text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          <CarUploaded />
          <div className="w-[100%] h-[50px] bg-white text-black text-center">
            <h1> {formData.Name}</h1>
            <span className="flex">
              <p>posted 1hour ago: </p>
              <p>{currentDate.toDateString()}</p>
              <h2>Location: {formData.location}</h2>
            </span>
          </div>{" "}
          <div className="flex justify-center md:flex-row flex-col md:w-[80%] w-[90%] h-[100%] ">
            <div className="w-[50%]">
              <h2>Type: {formData.Catergory}</h2>
              <h2>Cost Per Hire: </h2>
              <h2>Location: {formData.location}</h2>
              <h2>
                Destinations: {formData.destination} {"state"}
              </h2>
              <h2>Vehicle Size: Large</h2>
              <h2>Vehicle issurance: {formData.inssurance}</h2>
              <h2>vehicle's Payload Capacity: {formData.payload}</h2>
              <span className="md:w-[50%] w-[100%] flex justify-between text-black">
                <button className="bg-white h-[50px] w-[40%]">Message</button>
                <button className="bg-white h-[50px] w-[40%]">Call</button>
              </span>
            </div>
            <div className="w-[50%]">
              <h2>Reputation Score:</h2>
              <h2>Load Vamping:</h2>
              <h2>Items Restriction:</h2>
              {/* <img src={formData.file} alt="Uploaded" />
              {formData.file} */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default CarDetails;
