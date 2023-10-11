import React from "react";
import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const FormContext = createContext();

function FormContextProvider(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    color: "",
    location: "",
    payload: "",
    driver: "",
    problems: "",
    serviced: "",
    restriction: "",
    issurance: "",
    file: null,
  });
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);

  const pages = 50;
  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=100&seed=abc`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCars(data);
      });
  }, [page]);

  const PER_PAGE = 8;
  const skip = page * PER_PAGE - PER_PAGE;
  const prevPage = () => {
    setPage(page - 1);
  };
  const nextPage = () => {
    setPage(page + 1);
  };

  const handleChange = (event) => {
    const { name, value, file } = event.target;

    setFormData({
      ...formData,
      [name]: value,
      file: file,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData) {
      navigate("/Account/CarDetails");
    } else {
      alert("All fields are required.");
    }
    console.log(formData);
  };
  const value = {
    formData,
    handleChange,
    handleSubmit,
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
