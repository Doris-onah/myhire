import React from "react";
import Header from "../header/Header";
import Footer from "../Footer";
import Search from "../Browsecars/Search";
import { Link,Outlet } from "react-router-dom";

function RentalDetails() {


    return (

        <div id="RentalDetails" className=" w-full bg-gradient-to-r from-purple-600 to-pink-500 font-plus-jakarta-sans ">
           <div className="fixed w-full">
            <Header />
            </div>
           
            <div className="pt-[100px]">
           <Search />
         
           <div id="Cars" className="w-full h-[100%]  font-plus-jakarta-sans  flex items-center justify-center">
           <div className="flex md:w-[90%] w-[80%]  flex-col items-center justify-center">
<div>
    {/* larger screen section */}
    <div className="hidden md:block">
         <h1 className="text-4xl font-semibold text-white">Check Out Trending Car Rental Details</h1>
         
    <p className="text-center text-[16px] text-[#FFF]">See the Car Rental Deals Everyone is Talking About, 
        from New <br/> Deals to Recurring  Deals</p></div>

        {/* smaller screen section */}
    <div className="md:hidden block">
         <h1 className="text-1xl font-bold text-white">Most popular car rental deals</h1>
    </div>
   
</div>

<div className=" flex-row items-between justify-center w-full h-[100%] ">

    <div className="flex flex items-between justify-center w-[100%] ">
<ul className="flex text-2xl text-white items-between justify-center w-[100%] my-4">
  <li className="w-full text-center hover:underline  hover:underline-offset-8 ">

    <Link to="/RentalDetails" className="hidden md:block" >Popular Car </Link>
    <Link to="/Cars" className="md:hidden block text-[15px]" >Popular  </Link>
    </li>

    <li className="w-full text-center hover:underline  hover:underline-offset-8 ">
        <Link to="/Cars/SuvsCars"  className="hidden md:block">Suvs & Truck</Link>
        <Link to="/Cars/SuvsCars" className="md:hidden block text-[15px]" >Large</Link>
        </li>

   <li className="w-full text-center ">
    <Link to="/Cars/SedanCars" className="hidden md:block" >Sedans</Link>
    <Link to="/Cars/SedanCars" className="md:hidden block text-[15px]" >Small</Link>
    </li>

    <li class="w-full text-center ">
     <Link to="/Cars/ExclusiveCars" className="hidden md:block" >Exclusive Car</Link>
     <Link to="/Cars/ExclusiveCars" className="md:hidden block text-[15px]"  >Exclusive </Link>
     </li>
</ul>
</div>
<Outlet />

</div>
        </div>
        </div>

            
                <Footer />

     </div>
      </div>
 
     
     
    );
}
export default RentalDetails;
