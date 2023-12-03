import { LiaFacebookF, LiaTwitter } from "react-icons/lia";
import { TiSocialInstagram } from "react-icons/ti";

import logo from "../images/logo.png";
function Footer() {
  return (
    <div className="w-[100%] h-[50vh]  bg-gradient-to-r from-purple-700 to-pink-600  flex justify-center items-center flex-col text-white ">
      <div className="flex  h-[80%] w-[90%] md:flex-row flex-col-reverse items-center justify-around">
        <div className="w-[100%] h-[55%] md:h-[90%] md:w-[30%] flex  items-center md:justify-start  justify-center">
          {" "}
          <div className="w-[100%]  md:w-[80%] h-[100%] flex-col text-center  flex justify-center">
            <div className=" flex items-center justify-center h-[50%] md:w-[60%]">
              <img src={logo} className="w-[70%]  h-[100%] " alt="logo" />
            </div>
            <p className="text-center md:text-left ">
              our vision is to provide convenience and help increase your sales
              through Our Car Rental
            </p>
            <div className="md:w-[50%] h-[20%] md:h-[15%]  w-full flex items-center justify-center gap-5  text-black">
              <div className="bg-white flex justify-center items-center  rounded-full h-[100%] w-[50px]">
                <LiaFacebookF />
              </div>
              <div className="bg-white flex justify-center items-center rounded-full h-[100%] w-[50px]">
                <LiaTwitter />
              </div>
              <div className="bg-white flex justify-center items-center rounded-full h-[100%] w-[50px]">
                <TiSocialInstagram />
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[60%]  w-[100%] md:h-[90%] h-[80%]  flex justify-center items-center ">
          {/* Column 1 */}
          <div className="md:h-[80%] h-[100%] md:w-[100%]  w-[50%] ">
            <h1 className="font-semibold text-lg md:mb-4 mb-0">ABOUT US</h1>
            <ul className="flex-col flex md:gap-6  items-start">
              <li className="hidden md:block">How it works</li>
              <li className="hidden md:block">Featured post</li>
              <li className="hidden md:block">Business relation</li>
              <p className="md:hidden block">whitepaper</p>
              <p className="md:hidden block">blog</p>
              <p className="md:hidden block">activity </p>
            </ul>
          </div>
          {/* Column 2 */}
          <div className=" h-[80%] w-[100%]  hidden md:block">
            <h1 className="font-semibold text-lg mb-4">COMMUNITY</h1>
            <ul className="flex flex-col space-y-2 items-start">
              <li>Events</li>
              <li>Our Blogs</li>
              <li>Our podcast</li>
              <li>Invite a Friend to hire</li>
            </ul>
          </div>
          <div className=" h-[100%]  w-[35%] block md:hidden flex-col justify-center items-end">
            <h1 className="font-semibold text-lg mb-0">SUPPORT</h1>
            <div className="flex flex-col ">
              <p>help & support</p>
              <p>community</p>
              <p>contact</p>
            </div>
          </div>
          {/* Column 3 */}
          <div className=" h-[80%] w-[50%]  hidden md:block">
            <h1 className="font-semibold text-lg mb-4">SOCIALS</h1>{" "}
            <ul className="list-none flex flex-col space-y-2 items-start">
              <li className="">Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>{" "}
        </div>
      </div>
      <div className="h-[10%] w-[100%] border-t border-gray-300 flex justify-center items-center md:justify-between">
        <div className="hidden md:block w-[20%]  mx-8">
          <p>@2023MyHire.All rights reserved</p>
        </div>
        <p className=" md:hidden block ">All rights reserved@2021</p>
        <div className="hidden md:block  w-[30%] h-[100%] ">
          <div className="flex justify-between items-center  w-[90%] h-[100%]">
            <p>privacy & policy</p>
            <p>Terms & condition</p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
export default Footer;
