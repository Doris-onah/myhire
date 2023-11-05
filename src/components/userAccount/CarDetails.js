import React from "react";
import Footer from "../Footer";
import { useContext } from "react";
import { FormContext } from "../userAccount/FormContext";
import CarUploaded from "./CarUploaded";

import { useParams } from "react-router-dom";
function CarDetails() {
  // const [bookmark, setBookmark] = useState(false);

  // const currentDate = new Date();

  const { cars } = useContext(FormContext);
  const { CarUploadedId } = useParams();
  const product = cars.find((e) => e.id === CarUploadedId);

  return (
    <div className="w-full h-[100%] text-white">
      <div className="w-full h-[100%] bg-gradient-to-r from-purple-600 to-pink-600 ">
        <div className="w-full h-[100%] flex items-center align-center flex-col text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          <CarUploaded product={product} />
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default CarDetails;
