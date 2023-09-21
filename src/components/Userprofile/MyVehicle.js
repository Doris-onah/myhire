import "./MyAdvert.css";
import { LuClock9 } from "react-icons/lu";
import { FaPen } from "react-icons/fa";
import {
  IoChevronDownCircleSharp,
  IoCheckmarkSharp,
  IoHandRightSharp,
  IoCloseCircleSharp,
} from "react-icons/io5";
function MyVehicle() {
  return (
    // <div className="w-ful bg-[#5D3578] h-[100%]">
    //   <div className="MyAdvert-header ">
    //     <div className="myadvert-nav">
    //       <h1 className="text-2xl">MY VEHICLE</h1>{" "}
    //       <div className="advert-icon">
    //         <ul className="h">
    //           <li className="myad-icon">
    //             <IoCheckmarkSharp />
    //             Active(3)
    //           </li>
    //           <li className="myad-icon">
    //             <LuClock9 />
    //             Reviewing(1)
    //           </li>
    //           <li className="myad-icon">
    //             <FaPen />
    //             Draft(2)
    //           </li>
    //           <li className="myad-icon">
    //             <IoHandRightSharp />
    //             Declined(0)
    //           </li>
    //           <li className="myad-icon">
    //             <IoCloseCircleSharp />
    //             Closed(4)
    //           </li>
    //           <li className="myad-icon">
    //             <IoChevronDownCircleSharp />
    //             All(5)
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   <hr className="h-px w-full bg-gray-200 dark:bg-gray-700" />
    // </div>
    <div className="w-ful bg-[#5D3578] h-[100%] flex  items-center justify-center  flex-col">
      <div className="MyAdvert-header ">
        <div className="myadvert-nav">
          <div className="advert-text">
            <h1 className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              My Vehicle
            </h1>
          </div>
          <div className="advert-icon">
            <ul className="">
              <li className="myad-icon">
                <IoCheckmarkSharp />
                Active(2)
              </li>
              <li className="myad-icon">
                <LuClock9 />
                Reviewing(3)
              </li>
              <li className="myad-icon">
                <FaPen />
                Draft(0)
              </li>
              <li className="myad-icon">
                <IoHandRightSharp />
                Declined(1)
              </li>
              <li className="myad-icon">
                <IoCloseCircleSharp />
                Closed(0)
              </li>
              <li className="myad-icon">
                <IoChevronDownCircleSharp />
                All
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="h-px w-full bg-gray-200 dark:bg-gray-700" />
      <div className="w-[95%] h-[90%]  flex items-center justify-center">
        {" "}
        <div className="w-[100%] h-[90%]  ">
          <div className=" bg-[#F2DEFF] md:w-[45%] w-[100%] h-[50%] flex justify-center items-center rounded-[10px]">
            <div className="mobile-advert text-[18px] flex  md:w-[95%] w-[100%] h-[90%] justify-between items-center justify-end ">
              <div className="bg-red-900 w-[60%] h-[100%] rounded-[10px]">
                i am the car image
              </div>
              <div className=" w-[37%] h-[100%] flex flex-col items-center justify-center ">
                <div className="w-[100%] h-[80%]  flex flex-col items-center justify-center">
                  <div className="w-[100%] h-[100%] text-black text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    <h1 className="">Toyota Venza</h1>
                    <p className="mobile-ad text-xs sm:text-base">LARGE</p>
                    <p className="text-xs sm:text-base">Lagos Nigeria</p>
                    <p className="mobile-ad text-xs sm:text-base">
                      Osun, Ondo ,Ibadan
                    </p>
                    <p className="text-xs sm:text-base">20,000 NGN per hire</p>
                  </div>
                </div>

                <div className="w-[100%] h-[20%] flex items-center justify-center">
                  <div className="btn flex justify-between items-center w-[100%] h-[100%] text-white">
                    <button className=" rounded-[20px]  bg-gradient-to-r from-purple-800 to-pink-600 w-[90px] h-[40px]  text-[12px]">
                      New Ads
                    </button>
                    <button className="rounded-[20px] bg-gradient-to-r from-purple-800 to-pink-600  w-[90px] h-[40px] text-[12px]">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyVehicle;
