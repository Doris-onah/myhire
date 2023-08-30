import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
// import WhyChooseUs from "../WhyChooseUs";
import logo from "../../images/logo.png";
import "./Header.css";

function Header() {
  const [show, setShow] = useState(false);

  return (
    <div className="header-container bg-gradient-to-r from-purple-600 to-pink-500">
      <div className="header">
        <div className="logo">
          <img src={logo} width="100px" height="100px" alt="logo" />
        </div>

        <nav className={"big"}>
          <div className="nav-links">
            <ul className="big ">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/HowItWorks">HowItWorks</Link>
              </li>

              <li>
                <Link to="/RentalDetails">RentalDetails</Link>
              </li>

              <li>
                <a href="#choose">WhyChooseUs</a>
              </li>

              <li>
                <Link to="/Review">Review</Link>
              </li>

              <li className=" w-[2px] md:h-[20px] md:bg-gray-200 md:border-0 md:dark:bg "></li>
              <li>
                <Link to="/Register">Register</Link>
              </li>
              <li>
                <button className="bg-white text-black border rounded-[4px] w-[70px]">
                  <Link to="/Login">Log in</Link>
                </button>
              </li>
            </ul>
          </div>

          <ul className="small">
            <li>
              <Link to="/" onClick={() => setShow(!show)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/HowItWorks" onClick={() => setShow(!show)}>
                HowItWorks
              </Link>
            </li>

            <li>
              <Link to="/RentalDetails" onClick={() => setShow(!show)}>
                RentalDetails
              </Link>
            </li>
            <li>
              <Link to="/WhyChooseUs" onClick={() => setShow(!show)}>
                WhyChooseUs
              </Link>
            </li>

            <li className=" md:w-px md:h-5 md:bg-gray-200 md:border-0 md:dark:bg "></li>
            <li>
              <Link to="/Register" onClick={() => setShow(!show)}>
                Register
              </Link>
            </li>
            <li>
              <button className="bg-white border rounded-[4px] w-[70px]">
                <Link to="/Login" onClick={() => setShow(!show)}>
                  Log in
                </Link>
              </button>
            </li>
          </ul>
        </nav>

        <div className="navbar" onClick={() => setShow(!show)}>
          {show ? (
            <button className="p-1 border border-white-300 focus:outline-none text-[28px] text-white">
              <GrClose />
            </button>
          ) : (
            <button className="p-1 border border-white-300 focus:outline-none font-8 text-[28px] text-white">
              <GiHamburgerMenu />{" "}
            </button>
          )}
        </div>
      </div>
      <hr className="h-px w-full bg-gray-200 dark:bg-gray-700" />
    </div>
  );
}

export default Header;
