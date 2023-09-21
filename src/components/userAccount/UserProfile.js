import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
function UserProfile() {
  return (
    <div className="bg-purple-100 flex justify-center align-center md:h-[90vh] h-[90vh] text-[white] text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
      <div className="md:w-[90%] w-[99%]  h-[100%] flex justify-between align-center">
        <div className="md:w-[25%] w-[40%] h-[100%] gap-4 flex-col flex justify-center items-center ">
          <div className="w-[90%] h-[30%] rounded-[10px]  bg-[#5D3578] flex justify-center items-center">
            <div className="w-[90%] h-[90%] flex flex-col justify-center items-center ">
              {" "}
              <div className="text-[#5D3578] bg-gray-200 md:w-[40%] w-[35%] h-[20%] md:h-[50%] md:text-[80px] text-[40px] flex justify-center items-center rounded-[50%]">
                <BsFillPersonFill />
              </div>
              <h1 className="mb-6">DORIS ONAH</h1>
              <hr className="h-px w-full bg-gray-200 dark:bg-gray-700" />
              <br />
              <h2>add balance: 30,000NGN</h2>
            </div>
          </div>
          <div className="w-[90%]   h-[10%] rounded-[10px] bg-[#5D3578] flex justify-center items-center">
            <Link to="/Account/UserProfile"> My Advert </Link>
          </div>
          <div className="w-[90%] h-[10%] rounded-[10px] bg-[#5D3578] flex justify-center items-center">
            <Link to="MyVehicle"> My Vehicle</Link>
          </div>
          <div className="w-[90%] h-[10%] rounded-[10px] bg-[#5D3578] flex justify-center items-center">
            <Link to="Followers">My Followers</Link>
          </div>
          <div className="w-[90%] h-[10%] rounded-[10px]  bg-[#5D3578] flex justify-center items-center">
            <Link to="FeedBack"> My Feedbacks </Link>
          </div>
          <div className="w-[90%] h-[10%] rounded-[10px] bg-[#5D3578] flex justify-center items-center">
            <Link to="MyFaq"> Frequently Asked Questions</Link>
          </div>
        </div>
        <div className="md:w-[80%] w-[70%] flex justify-center items-center ">
          <div className="md:w-[95%] w-[95%]  h-[90%] bg-[#5D3578] rounded-[20px] ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
