import React from "react";
export default function UserReview({ name, position, rating }) {
  return (
    <div className="md:w-[30%] w-[100%] md:h-[70%] h-[35%] bg-gray-300 rounded flex flex-col justify-center items-center">
      <div className="w-[90%] h-[90%] flex flex-col justify-center items-center">
        {" "}
        <div className="w-[100%] md:h-[40%] h-[30%]  flex justify-between">
          <div className="flex gap-2">
            <div className="h-[50px] w-[50px] bg-gray-100 rounded-full flex justify-center items-center">
              img
            </div>
            <div>
              <h1>{name}</h1>
              <p className="text-[12px]">{position}</p>
            </div>
          </div>
          <div>{rating}</div>
        </div>
        <div className="w-[100%] md:h-[50%] h-[100%]  flex justify-center items-center ">
          <p>
            “Wow... I am very happy to use this VPN, it turned out to be more
            than my expectations and so far there have been no problems.
            LaslesVPN always the best”.
          </p>
        </div>
      </div>
    </div>
  );
}
