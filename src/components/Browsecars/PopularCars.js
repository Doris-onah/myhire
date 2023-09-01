import React from "react";
import { useEffect, useState } from "react";
import "../Browsecars/AllCar.css"
import { HiUserAdd } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function PopularCars() {
   const [car, setCar] = useState([]);
const [page, setPage] = useState(1)



useEffect(() => {
   fetch(
      `https://randomuser.me/api/?page=${page}&results=30&seed=abc`
      )
    .then((response) => {
    return response.json();
    })
    .then((data) => {
    setCar(data);
    });
  }, []);

  const PER_PAGE = 8;
  const pages = 5;
  // const total = users?.results?.length;
  const skip = page * PER_PAGE - PER_PAGE;

    return (
        <div id="PopularCars">
        <div className="flex w-full h-[100%]   md:grid md:grid-cols-4 gap-4 grid grid-cols-1">
{car?.results?.slice(skip, skip + PER_PAGE).map((popular, index) => {
    return(

<div className=" md:w-[100%] md:h-[100%] h-[300px] bg-gray-200 md:bg-inherit  rounded-[20px] flex items-center justify-center " key={`${popular.id}_${index}`} >
         
<div className="flex md:flex-col items-center justify-center w-[95%] h-[90%] rounded-[20px] md:rounded-0 md:bg-inherit">

<div className=" md:w-full w-[50%] md:h-[100%] h-[100%] flex items-center justify-center">
    <div className="w-[100%]  h-[100%] flex items-center justify-center">
       <img src={popular.picture.medium} className="md:w-full w-[100%] h-[100%] md:rounded-[15px]" alt="" />
          </div>
          </div>

          {/* for big screen section */}
          
          <div className="md:block hidden  flex md:w-[100%] items-center md:justify-center md:relative md:bottom-[60px]">
          <div className="w-[100%] h-[40px] flex items-center justify-around">
 <button className="text-[15px] bg-white h-[40px] w-[100px]">CALL NOW</button>
 <button className="bg-white h-[40px] w-[100px]">MESSAGE</button>
 </div>
 </div>

       {/* for mobile section */}
       <div className=" md:hidden block text-[18px] flex  w-[80%] h-[100%]  items-center justify-end ">
      <div className=" w-[95%] h-[100%] flex flex-col items-center justify-center ">
         <div className="w-[100%] h-[70%]">
             <h1>Hyundai Space Box <br/>$100 Daily</h1>
             </div>
         <div className="w-[100%] h-[100%]">
            <span className="w-[100%] h-[100%] flex flex-col justify-center gap-4">
               <div className="flex items-center justify-between">
                  <span className="flex gap-4  items-center justify-center"><HiUserAdd/> <p>7 people</p></span>
                  <span className="flex gap-2  items-center justify-center"><SlCalender/> <p>2022 model</p></span>
               </div>
               <div className="flex items-center justify-between">
                  <span className="flex gap-2 items-center justify-center"><FaCar/> <p>Petrol Engine</p></span>
                  <span className="flex gap-2 items-center justify-center"><FaLocationDot/> <p>Lagos</p></span>
               </div>
            </span>
         </div>

<div className="w-[100%] h-[50%] flex items-center justify-center">
         <div className="btn flex justify-between w-[100%] h-[40%]">
      <button className=" rounded-[20px]  bg-gradient-to-r from-purple-800 to-pink-600 w-[90px] h-[40px]">Message</button>
      <button className="rounded-[20px] bg-gradient-to-r from-purple-800 to-pink-600  w-[90px] h-[40px]">Place Call</button>
      </div>
      </div>
      {/* </div> */}

      <div className="btn flex justify-between hidden md:block">
      <button className="text-[15px] bg-white h-[40px] w-[100px]">CALL NOW</button>
      <button className="bg-white h-[40px] w-[100px]">MESSAGE</button>
      </div>
         </div>
</div>
</div>

</div>
    )})};
  
     </div>
      {/* /* pagination*/}
   <div className="flex items-center justify-center mb-8">
 <button className="w-[100px] h-[40px] bg-red-100 text-black">show more</button>
</div>   
</div>
     
   );
}
export default PopularCars;


      
