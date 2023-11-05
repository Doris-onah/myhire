import React from "react";
import { useState, createContext } from "react";
import { useEffect } from "react";

export const FormContext = createContext();

function FormContextProvider(props) {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);

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
  }, [page]);

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

  // const handleChange = (event) => {
  //   const { name, value, file } = event.target;

  //   setCars({
  //     ...Cars,
  //     [name]: value,
  //     file: file,
  //   });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // if (formData) {
  //   //   navigate("/Account/CarDetails");
  //   // } else {
  //   //   alert("All fields are required.");
  //   // }
  //   console.log(formData);
  // };
  const value = {
    cars,
    page,
    prevPage,
    nextPage,
    PER_PAGE,
    skip,
    pages,
  };

  return (
    <FormContext.Provider value={value}>{props.children}</FormContext.Provider>
  );
}
export default FormContextProvider;
// useEffect(() => {
//   //   fetch(`https://randomuser.me/api/?results=100&seed=abc`)
//   //     .then((response) => {
//   //       return response.json();
//   //     })
//   //     .then((data) => {
//   //       setCars(data);
//   //     });
//   // }, [page]);
