import React from "react";
import { useState, createContext } from "react";
import { useEffect } from "react";

export const FormContext = createContext();

function FormContextProvider(props) {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const pages = 50;
  useEffect(() => {
    fetch(`https://myhireng1.pythonanywhere.com/api/v1/car/`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((response) => {
        setCars(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [pages]);

  const PER_PAGE = 8;
  const skip = page * PER_PAGE - PER_PAGE;
  const prevPage = () => {
    if (page < 1) {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    if (page >= 1) {
      setPage(page + 1);
    }
  };
  // serchcompoennt;

  const handleOnChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filtered = cars.filter((car) =>
    car.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  const value = {
    cars,
    filtered,
    page,
    prevPage,
    nextPage,
    PER_PAGE,
    skip,
    pages,
    handleOnChange,
    searchInput,
  };

  return (
    <FormContext.Provider value={value}>{props.children}</FormContext.Provider>
  );
}
export default FormContextProvider;
