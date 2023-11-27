import React from "react";
import AllCars from "./AllCars";
import { useContext } from "react";
import { FormContext } from "../userAccount/FormContext";
function SedansCars() {
  const { cars, PER_PAGE, skip, prevPage, nextPage, page, pages } =
    useContext(FormContext);
  const sedan = cars.filter((car) => car.category === "sedan");
  console.log(sedan);
  return (
    <div id="SedansCars flex items-center justify-center">
      {" "}
      {sedan?.slice(skip, skip + PER_PAGE).map((car, index) => {
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
export default SedansCars;
