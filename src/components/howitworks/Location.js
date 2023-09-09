
import "./Location.css";

import { IoLocationSharp } from "react-icons/io5";
import { BsFillCarFrontFill } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";
function Location () {

    return (
        <div className='location'>
          <div >
<div className='location-text'>
    <div className="text-con">
<h1>How it Works</h1>
<p>Our high-performing 3-minutes model delivers your next
    <br className="br"/> perfect Experience in 3 steps</p>
</div>
</div>

<div className='location-map'>
    <div className='maps-con'>
    <div className='maps'>
    <div className='map-icon'><IoLocationSharp/></div>
        <h1>Tell us your location</h1>
        <p>Tell us where you are to help us narrow down your Car Hire choices</p>
    </div>

    <div className='maps-lines '>
        <div className="lines">
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 357 85" fill="none">
  <path d="M355.522 6.0509C355.796 6.0901 356.049 5.90029 356.088 5.62695C356.127 5.3536 355.938 5.10023 355.664 5.06103L355.522 6.0509ZM0.913754 80.518C42.9832 87.8851 72.9043 84.9979 97.4548 76.9767C121.988 68.9612 141.131 55.8238 161.608 42.7776C182.093 29.7256 203.949 16.7378 233.983 8.91158C264.018 1.08524 302.265 -1.58723 355.522 6.0509L355.664 5.06103C302.306 -2.59157 263.921 0.0770298 233.731 7.94389C203.541 15.8108 181.577 28.8684 161.07 41.9342C140.554 55.0058 121.531 68.0587 97.1443 76.0262C72.7751 83.9881 43.023 86.8768 1.08625 79.533L0.913754 80.518Z" fill="white"/>
</svg></div>
       </div>
       
    <div className='maps'>
    <div className='map-icon'>   <AiFillCalendar/></div>
        <h1>Schedule Your Pick-up Date</h1>
        <p>Bothered about Pick-Up dates? Need not to worry,
             we’ve got you covered on what ever date you choose to start your Trip</p>
    </div>
   
    <div className='maps-lines '>
        <div className="lines">
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 357 85" fill="none">
  <path d="M355.522 6.0509C355.796 6.0901 356.049 5.90029 356.088 5.62695C356.127 5.3536 355.938 5.10023 355.664 5.06103L355.522 6.0509ZM0.913754 80.518C42.9832 87.8851 72.9043 84.9979 97.4548 76.9767C121.988 68.9612 141.131 55.8238 161.608 42.7776C182.093 29.7256 203.949 16.7378 233.983 8.91158C264.018 1.08524 302.265 -1.58723 355.522 6.0509L355.664 5.06103C302.306 -2.59157 263.921 0.0770298 233.731 7.94389C203.541 15.8108 181.577 28.8684 161.07 41.9342C140.554 55.0058 121.531 68.0587 97.1443 76.0262C72.7751 83.9881 43.023 86.8768 1.08625 79.533L0.913754 80.518Z" fill="white"/>
</svg></div>
       </div>

    <div className='maps mb-8'>
    <div className='map-icon' >  <BsFillCarFrontFill/> </div>
        <h1>Choose your date</h1>
        <p>Select from our wide array of Cars, one that fit your needs</p>
    </div>

    
</div>
</div>
            </div>
        </div>
    )

}
export default Location;