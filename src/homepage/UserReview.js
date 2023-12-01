import React from "react";
export default function UserReview() {
  return (
    <div className="md:w-[25%] w-[80%] h-[40%] bg-gray-300 rounded flex flex-col justify-center items-center">
      <div className="w-[90%] h-[90%] flex flex-col justify-center items-center">
        {" "}
        <div className="w-[100%] h-[40%]  flex justify-between">
          <div className="flex gap-2">
            <div className="h-[50px] w-[50px] bg-gray-100 rounded-full flex justify-center items-center">
              img
            </div>
            <div>
              <h1>doris</h1>
              <p>developer</p>
            </div>
          </div>
          <div>4.5</div>
        </div>
        <div className="w-[100%] h-[50%] flex justify-center items-center">
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
