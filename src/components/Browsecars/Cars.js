import React from "react";
import { Link, Outlet } from "react-router-dom";


function Cars() {
   
 return (
        
            <div id="Cars" className="w-full h-[100%] bg-gradient-to-r from-purple-800 to-pink-600 font-plus-jakarta-sans  flex items-center justify-center">
           <div className="flex md:w-[90%] w-[95%]  flex-col items-center justify-center">
<div className="md:my-20">
    {/* larger screen section */}
    <div className="hidden md:block">
         <h1 className="text-4xl font-semibold text-white">Check Out Trending Car Rental Details</h1>
         
    <p className="text-center text-[16px] text-[#FFF]">See the Car Rental Deals Everyone is Talking About, 
        from New <br/> Deals to Recurring  Deals</p></div>

        {/* smaller screen section */}
    <div className="md:hidden block">
         <h1 className="text-[20px] font-bold text-white">Most popular car rental deals</h1>
    </div>
   
</div>

<div className=" flex-row items-between justify-center w-full h-[100%] ">

    <div className="flex flex items-between justify-center w-[100%] ">
<ul className="flex text-2xl text-white items-between justify-center w-[100%] my-4">
  <li className="w-full text-center  ">

    <Link to="/Cars/PopularCars" className="hidden md:block" >Popular Car </Link>
    <Link to="/Cars/PopularCars" className="md:hidden block text-[15px]" >Popular  </Link>
    </li>

    <li className="w-full text-center  ">
        <Link to="/Cars/SuvsCars"  className="hidden md:block">Suvs & Truck</Link>
        <Link to="/Cars/SuvsCars" className="md:hidden block text-[15px]" >Large</Link>
        </li>

   <li className="w-full text-center ">
    <Link to="/Cars/SedanCars" className="hidden md:block" >Sedans</Link>
    <Link to="/Cars/SedanCars" className="md:hidden block text-[15px]" >Small</Link>
    </li>

    <li className="w-full text-center ">
     <Link to="/Cars/ExclusiveCars" className="hidden md:block" >Exclusive Car</Link>
     <Link to="/Cars/ExclusiveCars" className="md:hidden block text-[15px]"  >Exclusive </Link>
     </li>
</ul>
</div>
<Outlet />

</div>
        </div>
        </div>
    );
}
export default Cars;