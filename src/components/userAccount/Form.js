import React from "react";
import { useContext } from "react";
import { FormContext } from "../userAccount/FormContext";
function Form() {
  const { formData, handleChange, handleSubmit } = useContext(FormContext);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[100%] h-[90%] bg-[#5D3578] flex justify-center items-center  rounded-[10px]"
    >
      {" "}
      <div className=" w-[90%] md:w-[80%] h-[95%] text-black flex flex-col justify-between rounded-[10px]">
        <input
          type="Name"
          name="Name"
          className="bg-[#F2DEFF] md:w-[100%] md:h-[70px] h-[50px] border placeholder-black border-gray-300 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
          autoComplete="name"
          placeholder="Name"
          value={formData.Name}
          onChange={handleChange}
          required=""
        />
        <input
          type="category"
          name="category"
          id="category"
          className="bg-[#F2DEFF] md:w-[100%] md:h-[70px] h-[50px] placeholder-black border border-gray-300 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
          autoComplete="category"
          placeholder="Category"
          required=""
          value={formData.category}
          onChange={handleChange}
        />
        <input
          type="color-type"
          name="color-type"
          id="color"
          className="bg-[#F2DEFF] md:w-[100%] md:h-[70px] h-[50px] placeholder-black border border-gray-300 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          autoComplete="color"
          placeholder="Color"
          required=""
          value={formData.color}
          onChange={handleChange}
        />{" "}
        <input
          type="location"
          name="location"
          id="location"
          className="bg-[#F2DEFF] md:w-[100%] md:h-[70px] h-[50px] placeholder-black border border-gray-300 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-black "
          autoComplete="location"
          placeholder="Where is your location"
          required=""
          value={formData.location}
          onChange={handleChange}
        />
        <div className=" text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white">
          <h1 className="text-18px">Add Photo</h1>
          <h2>add atleast 5 photos for this category</h2>
          <p>
            first-picture is the title picture. you can change the order of
            photos:just drag your photo and drop it.
          </p>
        </div>
        <div className="">
          {" "}
          <input
            type="file"
            name="file"
            accept="image/jpg, image/jpeg, image/png"
            placeholder="+"
            autoComplete="upload file"
            value={formData.file}
            onChange={handleChange}
          />
        </div>{" "}
        <input
          type="destination"
          name="destination"
          id="destination"
          className="bg-[#F2DEFF] md:w-[100%] md:h-[70px] h-[50px] border border-gray-300 placeholder-black"
          autoComplete="destionation"
          placeholder="Available Destinations"
          required=""
          value={formData.destination}
          onChange={handleChange}
        />{" "}
        <input
          type="issurance"
          name="issurance"
          id="issurance"
          className="bg-[#F2DEFF] md:w-[100%] md:h-[70px] h-[50px] border border-gray-300 placeholder-black text-gray-900 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 d"
          autoComplete="issurance "
          placeholder="Is your Car Insured?"
          required=""
          value={formData.issurance}
          onChange={handleChange}
        />{" "}
        <input
          type="restriction"
          name="restriction"
          id="restriction"
          className="bg-[#F2DEFF] md:w-[100%] md:h-[70px] h-[50px] border border-gray-300 placeholder-black text-gray-900 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          autoComplete="restrict"
          placeholder="Any item restriction?"
          required=""
          value={formData.restriction}
          onChange={handleChange}
        />{" "}
        <input
          type="payload"
          name="payload"
          id="payload"
          className="bg-[#F2DEFF] md:w-[100%] md:h-[70px] h-[50px] border border-gray-300 placeholder-black text-gray-900 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
          autoComplete="payload"
          placeholder="Vehicle Payload Capacity"
          required=""
          value={formData.payload}
          onChange={handleChange}
        />{" "}
        <input
          type="driver"
          name="driver"
          id="drive"
          className="bg-[#F2DEFF] md:w-[100%] md:h-[70px] h-[50px] border border-gray-300 placeholder-black text-gray-900 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          autoComplete="driver"
          placeholder="Do you have a personal Driver?"
          required=""
          value={formData.driver}
          onChange={handleChange}
        />{" "}
        <input
          type="problems"
          name="problems"
          id="problem"
          className="bg-[#F2DEFF] md:w-[100%] md:h-[70px] h-[50px] border border-gray-300 placeholder-black text-gray-900 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          autoComplete="problem"
          placeholder="Does your Car have any fault?"
          required=""
          value={formData.problems}
          onChange={handleChange}
        />{" "}
        <input
          type="serviced"
          name="serviced"
          id="serviced"
          className="bg-[#F2DEFF] md:w-[100%] md:h-[70px] h-[50px] border border-gray-300 placeholder-black text-gray-900 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          autoComplete="service"
          placeholder="Last Serviced date"
          required=""
          value={formData.serviced}
          onChange={handleChange}
        />
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 md:w-[100%] md:h-[70px] h-[50px] border border-gray-300 flex justify-center items-center rounded-[10px] text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl text-white">
          <button type="submit" onClick={handleSubmit}>
            Submit my Response
          </button>
        </div>
      </div>
    </form>
  );
}
export default Form;
