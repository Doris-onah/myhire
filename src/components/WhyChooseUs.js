import "./WhyChoose.css";
import WhychooseHome from "../homepage/WhychooseHome";
import Header from "../header/Header";
import Footer from "./Footer";

function WhyChooseUs() {
  return (
    <div
      id="choose"
      className=" flex-col justify-center items-center text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl  bg-gradient-to-r from-purple-700 to-pink-600"
    >
      <Header />
      <WhychooseHome />
      <Footer />
    </div>
  );
}
export default WhyChooseUs;
