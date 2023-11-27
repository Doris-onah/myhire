import React from "react";
import AllCars from "./AllCars";
import { useContext } from "react";
import { FormContext } from "../userAccount/FormContext";
function ExclusiveCars() {
  const { cars, prevPage, nextPage, page, pages } = useContext(FormContext);
  const ExclusiveCars = cars.filter((car) => car.category === "exclusive");
  console.log(ExclusiveCars);
  return (
    <div id="PopularCars">
      {ExclusiveCars?.map((car, index) => {
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
export default ExclusiveCars;
