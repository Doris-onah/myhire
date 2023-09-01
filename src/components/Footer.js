import { LiaFacebookF, LiaTwitter } from "react-icons/lia";
import { TiSocialInstagram } from "react-icons/ti";
import "./Footer.css";
// import logo from "../../images/logo.png";
import logo from "../images/logo.png"
function Footer() {
  return (
    <div className="footer">
      <div className="md:w-[100%] flex items-center justify-center md:h-[100%] md:flex  md:justify-around md:items-center bg-[#5D3578] text-white">
        <div className="w-[80%] md:w-[90%] md:h-[450px] h-[550px] ">
          <div className="mt-4 md:w-[100%] w-[100%] md:h-[80%]  md:flex md:justify-around md:items-center md:flex-row flex items-center  flex-col-reverse">
            <div className=" w-[100%]   md:w-[70%] md:h-[100%] md:flex md:justify-center md:items-center ">
              <section className="md:w-[90%] w-[100%] h-[300px] flex flex-col items-center md:items-start text-[18px] ">
                <div className="w-[160px]  h-[100px] md:text-left ">
                  <img src={logo} className="w-[100%]  h-[100%] " alt="logo" />
                </div>
                <p className="text-center md:text-left">
                  our vision is to provide convenience <br /> and help increase
                  your sales through <br /> Our Car Rental
                </p>
                <span className="flex justify-between w-[100px] mt-4 text-black">
                  <div className="icon ">
                    <LiaFacebookF />
                  </div>
                  <div className="icon">
                    <LiaTwitter />
                  </div>
                  <div className="icon">
                    <TiSocialInstagram />
                  </div>
                </span>
              </section>
            </div>

            {/* large screen footer section */}
            <section className="hidden md:block w-[100%] h-[100%] md:flex md:justify-around md:items-center m-4">
              <span>
                <h1 className="font-semibold">ABOUT US</h1>
                <ul className="footer-items ">
                  <li className="mt-4">How it works</li>
                  <li className="mt-4">Featured post</li>
                  <li className="mt-4">Partnership</li>
                  <li className="mt-4">Business relation</li>
                </ul>
              </span>

              <span>
                <h1 className="font-semibold">COMMUNITY</h1>
                <ul className="footer-items">
                  <li className="mt-4">Events</li>
                  <li className="mt-4">Our Blogs</li>
                  <li className="mt-4">Our podcast</li>
                  <li className="mt-4">Invite a Friend to hire</li>
                </ul>
              </span>

              <span>
                <h1 className="font-semibold">SOCIALS</h1>
                <ul className="footer-items">
                  <li className="mt-4">Discord</li>
                  <li className="mt-4">instagram</li>
                  <li className="mt-4">twitter</li>
                  <li className="mt-4">facebook</li>
                </ul>
              </span>
            </section>

            {/* mobile screen footer section */}
            <section className="block md:hidden flex w-[100%] justify-between">
              <span>
                <h1 className="font-semibold">ABOUT-US</h1>
                <ul className="footer-items">
                  <li className="mt-4">Whitepaper</li>
                  <li className="mt-4">Blogs</li>
                  <li className="mt-4">Activity</li>
                </ul>
              </span>

              <span>
                <h1 className="font-semibold">SUPPORT</h1>
                <ul>
                  <li className="mt-4">Help & Support</li>
                  <li className="mt-4">Community</li>
                  <li className="mt-4">Author Profile</li>
                  <li className="mt-4">Contact</li>
                </ul>
              </span>
            </section>
          </div>

          <hr className="h-1 dark:bg-black-200 hidden md:block" />

          <div className=" flex items-center justify-center w-full">
            <section className="flex md:justify-between md:w-[100%]  items-center">
              <p> All rights reserved@2021</p>

              <span className="md:flex md:gap-8 hidden md:block">
                <p>Terms & Conditions</p>
                <p>Privacy & Policy</p>
              </span>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
