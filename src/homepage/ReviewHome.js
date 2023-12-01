import React from "react";
import UserReview from "../homepage/UserReview";

function ReviewHome() {
  return (
    <div
      id="Review"
      className="w-[100%] md:h-[70vh] h-[80vh]  flex flex-col items-center justify-center"
    >
      <div className="h-[20%] text-white font-extrabold   md:text-4xl text-3xl w-[80%]  flex justify-center">
        <h1>See What Our Trusted Customers Are Saying</h1>
      </div>
      <UserReview />
    </div>
  );
}
export default ReviewHome;
