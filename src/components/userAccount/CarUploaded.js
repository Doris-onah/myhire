import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FormContext } from "../userAccount/FormContext";
import CarDetails from "../Browsecars/CarDetails";
import Header from "../header/Header";
import Footer from "../Footer";

function CarUploaded() {
  const { cars } = useContext(FormContext);
  const { CarUploadedId } = useParams();
  const prod = cars.find((car) => car.name === CarUploadedId);

  return (
    <div>
      <Header />
      <CarDetails product={prod} />
      <Footer />
    </div>
  );
}
export default CarUploaded;
