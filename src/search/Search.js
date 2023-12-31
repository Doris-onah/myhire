import React from "react";
import { useContext } from "react";
import { FormContext } from "../formcontext/FormContext";

function Search() {
  const { handleOnChange, searchInput } = useContext(FormContext);
  return (
    <div
      id="search"
      className=" w-[100%] md:h-[30%] h-[15%]  flex items-center justify-center"
    >
      <div className="flex h-[70px] md:h-[100px] items-center justify-center w-full">
        <input
          type="text"
          value={searchInput}
          onChange={handleOnChange}
          placeholder="Search"
          autoComplete="search"
          className="md:w-[70%] md:h-[65px] h-[50px] border-2 
                      border-gray-200 bg-inherit px-5 hidden md:block
                      rounded-lg text-sm focus:outline-none"
        />

        <input
          type="text"
          value={searchInput}
          onChange={handleOnChange}
          placeholder="What are you looking for?"
          autoComplete="LOOKING FOR"
          className="w-[80%] md:w-[1000px] md:h-[70px] h-[50px] border-2 
                      border-gray-300 bg-white px-5 md:hidden block
                      rounded-lg text-sm focus:outline-none"
        />
      </div>
    </div>
  );
}
export default Search;
