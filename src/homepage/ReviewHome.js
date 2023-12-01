import React from "react";
import UserReview from "../homepage/UserReview";

function ReviewHome() {
  return (
    <div
      id="Review"
      className="w-[100%] md:h-[70vh] h-[100vh]  flex flex-col items-center justify-center"
    >
      <div className="text-white font-extrabold  w-[90%] md:w-[30%] text-center flex-col justify-center ">
        <h1 className="md:text-4xl text-2xl">
          See What Our Trusted Customers Are Saying
        </h1>{" "}
        <p>yours could be next</p>
      </div>
      <div className="flex md:h-[60%] h-[90%]  w-[100%] justify-center items-center ">
        <div className="flex justify-center items-center md:gap-8 gap-2 w-[90%] h-[90%] flex-col md:flex-row">
          <UserReview name="Doris" position="frontend" rating="5.6" />
          <UserReview name="Peter" position="backend" rating="4.5" />
          <UserReview name="Aaron" position="manager" rating="4.5" />
        </div>
      </div>
    </div>
  );
}
export default ReviewHome;
