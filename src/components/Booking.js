import { GoChevronDown } from "react-icons/go";

function Booking() {
  return (
    <div className="md:flex md:justify-center  md:items-center w-[100%] h-[180px]  hidden md:block text-black  bg-gradient-to-r from-purple-800 to-pink-600 font-plus-jakarta-sans  ">
      <div className="w-[94%] h-[100%]  flex items-center justify-center bg-gray-100 rounded-[10px]">
        <section className="flex justify-center items-center h-[100%] w-[94%] ">
          <div className="flex items-center gap-8 md:w-[100%] w-[80%] justify-between h-[90%] ">
            {/* pick up section */}
            <div className=" md:w-[80%]  ">
              {" "}
              <span className="flex gap-4">
                {" "}
                <div className="bg-gray-200 w-[25px] h-[25px] flex justify-center items-center rounded-[50%]">
                  <button
                    title="btn-off"
                    className="bg-white w-[12px] h-[12px]  rounded-[50%]"
                  ></button>
                </div>
                <h1>DROP-OFF</h1>{" "}
              </span>
              <div className="flex justify-center items-center w-[100%]   ">
                <div className="md:w-[80%] w-[50%] h-[100%]">
                  <h2 className=" font-semibold ">LOCATION</h2>
                  <span className="flex justify-between items-center gap-4 ">
                    select your city <GoChevronDown />
                  </span>
                </div>
                <hr className="mx-4 md:w-[2px] md:h-[80px] m-0 md:bg-gray-400 md:border-0 md:dark:bg p-0 " />
                <div className="md:w-[70%] w-[50%] h-[100%]  ">
                  <h2 className="  font-semibold ">DATE</h2>
                  <span className="flex justify-between items-center gap-4">
                    select your date
                    <GoChevronDown />
                  </span>
                </div>
                <hr className="mx-4 md:w-[2px] md:h-[80px] md:bg-gray-400 md:border-0 md:dark:bg p-0 " />
                <div className="md:w-[70%] w-[50%] h-[100%] ">
                  <h2 className="font-semibold ">TIME</h2>
                  <span className="flex justify-between items-center gap-4">
                    {" "}
                    select your time
                    <GoChevronDown />
                  </span>
                </div>
              </div>
            </div>
            {/* drop-off section */}
            <div className=" w-[80%] ">
              <span className="flex gap-4">
                <div className="bg-gray-200 w-[25px] h-[25px] flex justify-center items-center rounded-[50%]">
                  <button
                    title="btn-off"
                    className="bg-white w-[12px] h-[12px]  rounded-[50%]"
                  ></button>
                </div>
                <h1>DROP-OFF</h1>{" "}
              </span>
              <div className="flex justify-center items-center w-[100%]">
                <div className="md:w-[80%] w-[50%] h-[100%]">
                  <h2 className=" font-semibold ">LOCATION</h2>
                  <span className="flex justify-between items-center gap-4 ">
                    select your city <GoChevronDown />
                  </span>
                </div>
                <hr className="mx-4 md:w-[2px] md:h-[80px] m-0 md:bg-gray-400 md:border-0 md:dark:bg p-0 " />
                <div className="md:w-[70%] w-[50%] h-[100%]">
                  <h2 className="  font-semibold ">DATE</h2>
                  <span className="flex justify-between items-center gap-4">
                    select your date
                    <GoChevronDown />
                  </span>
                </div>
                <hr className="mx-4 md:w-[2px] md:h-[80px] md:bg-gray-400 md:border-0 md:dark:bg p-0 " />
                <div className="md:w-[70%] w-[50%] h-[100%]">
                  <h2 className="font-semibold ">TIME</h2>
                  <span className="flex justify-between items-center gap-4">
                    {" "}
                    select your time
                    <GoChevronDown />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="  flex justify-center items-center md:w-[10%] ">
            <div className="w-[80%] h-[40px] rounded-[5px] bg-white  h-[100%] flex justify-center items-center">
              <button>Search</button>
            </div>
          </div>{" "}
        </section>
      </div>
    </div>
  );
}
export default Booking;
