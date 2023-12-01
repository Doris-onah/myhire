import React from "react";
import AllCars from "./AllCars";
import { useContext } from "react";
import { FormContext } from "../formcontext/FormContext";
function PopularCars() {
  const { cars, prevPage, nextPage, page, pages } = useContext(FormContext);
  const popularCars = cars.filter((car) => car.category === "sedan");
  console.log(popularCars);

  return (
    <div id="PopularCars">
      {popularCars?.map((car, index) => {
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
export default PopularCars;
