import React from "react";
import UserReview from "../homepage/UserReview";

function ReviewHome() {
  return (
    <div className="w-[100%] md:h-[70vh] h-[100vh]  flex  justify-center items-center bg-gradient-to-r from-purple-600 to-pink-700">
      <div className="w-[100%]  h-[90%]   flex flex-col items-center justify-center ">
        <div className="text-white w-[90%] md:w-[35%] text-center flex-col justify-center ">
          <h1 className="md:text-4xl text-2xl hidden md:block font-extrabold">
            See What Our Trusted Customers Are Saying
          </h1>{" "}
          <h1 className="md:hidden block text-2xl font-extrabold">
            Trusted by Thousands of Happy Customer
          </h1>
          <p className="md:block hidden">yours could be next</p>
          <p className="md:hidden block ">
            A high-performing car rental system for any rent-a-car company and
            website
          </p>
        </div>
        <div className="flex md:h-[60%] h-[100%]  w-[100%] justify-center items-center ">
          <div className="flex justify-center items-center md:gap-8 gap-2 w-[90%] h-[90%] flex-col md:flex-row">
            <UserReview name="Doris" position="frontend" rating="5.6" />
            <UserReview name="Peter" position="backend" rating="4.5" />
            <UserReview name="Aaron" position="manager" rating="4.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReviewHome;
