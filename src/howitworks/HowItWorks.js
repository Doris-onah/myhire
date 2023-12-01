import "./Location.css";
import Header from "../header/Header";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
import HowitworkHome from "../homepage/HowitworkHome";
import ReviewHome from "../homepage/ReviewHome";
function HowItWorks() {
  return (
    <div className="loco h-[100%] flex-col justify-center items-center w-full bg-gradient-to-r from-purple-600 to-pink-600">
      <Header />
      <HowitworkHome />
      <Booking />
      <ReviewHome />
      <Footer />
    </div>
  );
}
export default HowItWorks;
