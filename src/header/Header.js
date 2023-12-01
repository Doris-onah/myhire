import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import logo from "../images/logo.png";
import "./Header.css";

function Header() {
  const [menu, setMenu] = useState(true);

  const handle = (e) => {
    setMenu(!menu);
    e.preventDefault();
  };
  return (
    <div className="header text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl w-full ">
      <div className="header-con items-center ">
        <div className="head flex md:justify-center justify-between items-center w-[100%] h-[100%] ">
          <div className=" header__left h-[90%] md:w-[20%] w-[30%] flex justify-center ">
            <img src={logo} width="100%" height="100%" alt="logo " />
          </div>

          <div className="nav-con">
            <div className="nav ">
              <div onClick={handle} className="handle text-[40px] ">
                {menu ? <GiHamburgerMenu /> : <GrClose />}
              </div>
              <ul className={menu ? "" : "nav-active"}>
                <li>
                  <span className="link" onClick={() => setMenu(!menu)}>
                    <a href="/">Home</a>
                  </span>
                </li>{" "}
                <li>
                  <Link
                    to="/howitworks"
                    className="link"
                    onClick={() => setMenu(!menu)}
                  >
                    HowItWorks
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Cars"
                    className="link"
                    onClick={() => setMenu(!menu)}
                  >
                    hireDetails
                  </Link>{" "}
                </li>
                <li>
                  <a
                    href="/#choose"
                    className="link"
                    onClick={() => setMenu(!menu)}
                  >
                    whychooseus
                  </a>
                </li>
                <li>
                  <a
                    href="/#Review"
                    className="link"
                    onClick={() => setMenu(!menu)}
                  >
                    Review
                  </a>
                </li>
                <li>
                  {" "}
                  <Link to="/Register" onClick={() => setMenu(!menu)}>
                    Register
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/Login" onClick={() => setMenu(!menu)}>
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
