
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
        <p>Tell uis where you are to help us narrow down your Car Hire choices</p>
    </div>

    <div className='maps'>
       </div>
    <div className='maps'>
    <div className='map-icon'>   <AiFillCalendar/></div>
        <h1>Schedule Your Pick-up Date</h1>
        <p>Bothered about Pick-Up dates? Need not worry,
             we’ve got you covered on what ever date you choose to start your Trip</p>
    </div>
    <div className='maps'>
    </div>
    <div className='maps'>
    <div className='map-icon'>  <BsFillCarFrontFill/> </div>
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