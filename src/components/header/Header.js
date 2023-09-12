import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import logo from "../../images/logo.png";
import "./Header.css";

function Header() {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const home = () => {
    navigate("/")
  }

 

  return (
    <div className=" header-container bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="header">
        <div className="logo">
          <img src={logo} width="100px" height="100px" alt="logo" />
        </div>

        <nav className={show? "small" : "big"}>
          <div className="big">
            <ul className="nav-links ">

              <li>
               <span onClick={home}>
                 <a href="#home">Home</a>
               </span>
              </li>

              <li>
               <span onClick={home}>
                 <a href="#howitworks">HowItWorks</a>
               </span>
              </li>

              <li>
               <span onClick={home}>
                 <a href="#Cars" >HireDetails</a>
               </span>
              </li>

              <li>
               <span onClick={home} >
                 <a href="#choose">WhyChooseUs</a>
                  </span>
              </li>

              <li>
                <span onClick={home}>
                  <a href="#Review">Review</a>
                  </span>
              </li>

              <li className=" w-[2px] md:h-[20px] md:bg-gray-200 md:border-0 md:dark:bg "></li>
              <li>
                <Link to="/Register">Register</Link>
              </li>
              <li>
                <div className="bg-white text-black border rounded-[4px] w-[70px] text-center" >
                  <Link to="/Login">Log in</Link>
                </div>
              </li>
            </ul>
          </div>

          <div className="small">
            <ul className="nav-links ">
              <li>
                <Link to="/" onClick={() => {setShow(!show)}}>Home</Link>
              </li>

              <li>
               <span onClick={home}>
                 <a href="#howitworks"  onClick={() => {setShow(!show)}}>HowItWorks</a>
               </span>
              </li>

              <li>
                <span onClick={home}>
                <a href="#Cars" onClick={() => {setShow(!show)}}>HireDetails</a>
                </span>
              </li>

              <li>
               <span onClick={home} >
                 <a href="#choose" onClick={() => {setShow(!show)}}>WhyChooseUs</a>
                  </span>
              </li>

              <li>
                <span onClick={home}>
                  <a href="#Review" onClick={() => {setShow(!show)}}>Review</a>
                  </span>
              </li>

              <li className=" w-[2px] md:h-[20px] md:bg-gray-200 md:border-0 md:dark:bg "></li>
              <li>
                <Link to="/Register" onClick={() => {setShow(!show)}}>Register</Link>
              </li>
              <li>
                <div className="bg-white text-center text-black border rounded-[4px] w-[70px]">
                  <Link to="/Login" onClick={() => {setShow(!show)}}>Log in</Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <div className="navbar" onClick={() => setShow(!show)}>
          {show ? (
            <button title="menu-close" className="p-1 border border-white-300 focus:outline-none text-[28px] text-white">
              <GrClose />
            </button>
          ) : (
            <button title="menu-open" className="p-1 border border-white-300 focus:outline-none font-8 text-[28px] text-white">
              <GiHamburgerMenu />
            </button>
          )}
        </div>
      </div>
      <hr className="h-px w-full bg-gray-200 dark:bg-gray-700" />
    </div>
  );
}

export default Header;
