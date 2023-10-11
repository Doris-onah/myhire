import React from "react";
import Form from "../userAccount/Form";

function UploadCar() {
  return (
    <div className="bg-[#F2DEFF]  flex justify-center align-center md:w-full md:h-[100%] h-[100%] text-[white] text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
      <div className="md:w-[90%] w-[95%] h-[100%] flex items-center justify-center">
        <div className="md:w-[90%] w-[100%] md:h-[1450px] h-[1000px]  flex flex-col items-center justify-between">
          {" "}
          <div className="w-[100%] h-[10%]  flex items-center justify-center">
            <div className="w-[100%] h-[60%] bg-[#5D3578]  flex justify-center items-center rounded-[10px] text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              <h1 className="text-center "> Upload your vehicle</h1>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}
export default UploadCar;
