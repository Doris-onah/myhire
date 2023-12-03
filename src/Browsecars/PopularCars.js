import React from "react";
import AllCars from "./AllCars";
import { useContext } from "react";
import { FormContext } from "../formcontext/FormContext";
function PopularCars() {
  const { prevPage, nextPage, page, pages, filtered } = useContext(FormContext);
  // const popularCars = cars.filter((car) => car.category === "sedan");

  return (
    <div className="w-[100%] grid md:grid-cols-4 grid-cols-2 gap-4">
      {" "}
      {filtered.length > 0 ? (
        filtered?.map((car, index_car) => {
          return (
            <AllCars
              car={car}
              index={index_car}
              prevPage={prevPage}
              page={page}
              pages={pages}
              nextPage={nextPage}
            />
          );
        })
      ) : (
        <div className="w-[100%] text-white">sorry, no results found</div>
      )}
    </div>
  );
}
export default PopularCars;
