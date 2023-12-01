import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FormContext } from "../formcontext/FormContext";
import CarDetails from "../Browsecars/CarDetails";
import Header from "../header/Header";

function CarUploaded() {
  const { cars } = useContext(FormContext);
  const { CarUploadedId } = useParams();
  const prod = cars.find((car) => car.name === CarUploadedId);

  return (
    <div className="w-full h-[100vh]  bg-gradient-to-r from-purple-600 to-pink-600">
      <Header />
      <CarDetails product={prod} />
    </div>
  );
}
export default CarUploaded;
