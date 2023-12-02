import "./Location.css";
import Header from "../header/Header";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
import HowitworkHome from "../homepage/HowitworkHome";
import ReviewHome from "../homepage/ReviewHome";
function HowItWorks() {
  return (
    <div className="h-[100%] flex-col justify-center items-center w-[100%] ">
      <Header />
      <HowitworkHome />
      <Booking />
      <ReviewHome />
      <Footer />
    </div>
  );
}
export default HowItWorks;
