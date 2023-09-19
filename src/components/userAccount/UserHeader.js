import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import logo from "../../images/logo.png";
import { MdBookmark } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { HiBars4 } from "react-icons/hi2";
import { IoMdNotifications } from "react-icons/io";
import { BsFillChatDotsFill } from "react-icons/bs";
import "./UserHeader.css";
function UserHeader() {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };

  return (
    <div className=" header-con bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="user-header">
        <div className="user-logo">
          <img src={logo} width="170px" height="170px" alt="logo" />
        </div>

        <nav className={show ? "small" : "user-big"}>
          <div className="user-big">
            <ul className="user-nav-links ">
              <li className="hover:border-gray-400">
                <Link to="Bookmark">
                  {" "}
                  <div className="nav-icon ">
                    <MdBookmark />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="chat">
                  {" "}
                  <div className="nav-icon">
                    <BsFillChatDotsFill />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="Notifications">
                  <div className="nav-icon">
                    <IoMdNotifications />{" "}
                  </div>
                </Link>
              </li>
              <li>
                <Link to="UserMenu">
                  <div className="nav-icon">
                    <HiBars4 />
                  </div>
                </Link>
              </li>
              <div className="">
                <li className="flex flex-row  justify-between  w-[160px] h-[100%]">
                  <Link to="UserProfile">
                    <div className="nav-icon text-pink-600 w-[100px] h-[1000px]">
                      <BsFillPersonFill />
                    </div>
                  </Link>

                  <div
                    onClick={home}
                    className="bg-white text-black border rounded-[4px] w-[100px] text-center"
                  >
                    <Link to="/Login">Log out</Link>
                  </div>
                </li>
              </div>
            </ul>
          </div>

          <div className="small">
            {" "}
            <ul className="user-nav-links ">
              <li>
                <Link to="/Account">
                  {" "}
                  <div
                    className="nav-icon"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    <MdBookmark />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="Chat">
                  {" "}
                  <div
                    className="nav-icon"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    <BsFillChatDotsFill />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="Notifications">
                  <div
                    className="nav-icon"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    <IoMdNotifications />{" "}
                  </div>
                </Link>
              </li>
              <li>
                <Link to="UserMenu">
                  <div
                    className="nav-icon"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    <HiBars4 />
                  </div>
                </Link>
              </li>
              <li>
                <div className="flex flex-col justify-center items-center gap-5 w-[160px] h-[100px]">
                  <Link to="UserProfile">
                    <div
                      className="nav-icon text-pink-600 w-[100px] h-[1000px]"
                      onClick={() => {
                        setShow(!show);
                      }}
                    >
                      <BsFillPersonFill />
                    </div>
                  </Link>

                  <div
                    onClick={home}
                    className="bg-white text-black border rounded-[4px] w-[100px] text-center"
                  >
                    <Link to="/Login">Log out</Link>
                  </div>
                </div>
              </li>
            </ul>{" "}
          </div>
        </nav>

        <div className="navbar" onClick={() => setShow(!show)}>
          {show ? (
            <button
              title="menu-close"
              className="p-1 border border-white-300 focus:outline-none text-[28px] text-white"
            >
              <GrClose />
            </button>
          ) : (
            <button
              title="menu-open"
              className="p-1 border border-white-300 focus:outline-none font-8 text-[28px] text-white"
            >
              <GiHamburgerMenu />
            </button>
          )}
        </div>
      </div>
      <hr className="h-px w-full bg-gray-200 dark:bg-gray-700" />
    </div>
  );
}

export default UserHeader;
