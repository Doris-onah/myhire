
import { GoChevronDown } from "react-icons/go";

function Booking(){
    return (
<div class="md:flex md:justify-center md:items-center w-full h-[180px]  hidden md:block text-black  ">
        
        <section class="md:flex md:justify-center md:items-center  w-[100%]"> 
        <div class=" w-[100%] flex justify-center items-center">
        <div class=" md:flex rounded-[10px] md:w-[89%]  h-[170px] md:justify-around items-center bg-gray-100">
         
         {/* pick up section */}
    <span class="flex justify-center items-center   ">
            <div class="w-[100%]  h-[100%]">
               <span class="flex gap-4"> <div class="bg-gray-200 w-[25px] h-[25px] flex justify-center items-center rounded-[50%]">
                <button class="bg-white w-[12px] h-[12px]  rounded-[50%]"></button></div><h1>PICK-UP</h1> </span>
                 <h2 class=" font-semibold ">LOCATION</h2>
               <span class="flex justify-between items-center gap-4 ">select your city <GoChevronDown /></span>
            </div>

            <hr className="mx-8 md:w-[2px] md:h-[80px] m-0 md:bg-gray-200 md:border-0 md:dark:bg p-0 "/>
           
           <div  class="w-[100%]  h-[100%]">
               <h2 class="  font-semibold ">DATE</h2>
               <span class="flex justify-between items-center gap-4">schedule your date<GoChevronDown /></span>
           </div>

           <hr className="mx-8 md:w-[2px] md:h-[80px] md:bg-gray-200 md:border-0 md:dark:bg p-0 "/>
           
           <div class="w-[100%]  h-[100%] ">
               <h2 class="mt-4 font-semibold ">TIME</h2>
               <span class="flex justify-between items-center gap-4"> schdule your pick-up time<GoChevronDown /></span>
           </div>
 </span>

        {/* drop-off section */}
        <span class="flex justify-center items-center  ">
            <div class="w-[100%]  h-[100%]  ">
               <span class="flex gap-4"> <div class="bg-gray-200 w-[25px] h-[25px] flex justify-center items-center rounded-[50%]">
                <button class="bg-white w-[12px] h-[12px]  rounded-[50%]"></button></div><h1>DROP-OFF</h1> </span>
               <div > 
                <h2 class=" font-semibold ">LOCATION</h2>
               <span class="flex justify-between items-center gap-4 ">select your city <GoChevronDown /></span>
            </div>
            </div>

            <hr className="mx-8 md:w-[2px] md:h-[80px] m-0 md:bg-gray-200 md:border-0 md:dark:bg p-0 "/>
           
           <div  class="w-[100%]  h-[100%] mt-4">
               <h2 class="  font-semibold ">DATE</h2>
               <span class="flex justify-between items-center gap-4">select your date<GoChevronDown /></span>
           </div>

           <hr className="mx-8 md:w-[2px] md:h-[80px] md:bg-gray-200 md:border-0 md:dark:bg p-0 "/>
           
           <div class="w-[100%]  h-[100%] ">
               <h2 class="mt-4 font-semibold ">TIME</h2>
               <span class="flex justify-between items-center gap-4"> select your time<GoChevronDown /></span>
           </div>

           <div class="  flex justify-center items-center ml-4">
            <div class="w-[100%]  h-[100%]">
           <button class="bg-white w-[120px] h-[40px] rounded-[5px]">Search</button>
           </div>
        </div>
 </span>

          
       </div>
        </div> 
        </section>
        </div>
        
       
    );
};
export default Booking;
            