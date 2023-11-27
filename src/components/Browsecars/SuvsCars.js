import React from "react";
import AllCars from "./AllCars";
import { useContext } from "react";
import { FormContext } from "../userAccount/FormContext";
function SuvsCars() {
  const { cars, PER_PAGE, skip, prevPage, nextPage, page, pages } =
    useContext(FormContext);
  const suv = cars.filter((car) => car.category === "suv");
  console.log(suv);
  return (
    <div id="SuvsCars">
      {suv?.slice(skip, skip + PER_PAGE).map((car, index) => {
        return (
          <AllCars
            car={car}
            index={index}
            prevPage={prevPage}
            page={page}
            pages={pages}
            nextPage={nextPage}
          />
        );
      })}
    </div>
  );
}
export default SuvsCars;
