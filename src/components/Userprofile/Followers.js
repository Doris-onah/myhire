import "./MyAdvert.css";
import { LuClock9 } from "react-icons/lu";
import { FaPen } from "react-icons/fa";
import {
  IoChevronDownCircleSharp,
  IoCheckmarkSharp,
  IoHandRightSharp,
  IoCloseCircleSharp,
} from "react-icons/io5";
function Followers() {
  return (
    <div className="w-ful bg-[#5D3578] h-[100%]">
      <div className="MyAdvert-header ">
        <div className="myadvert-nav">
          <h1 className="text-2xl">FOLLOWERS</h1>{" "}
          <div className="advert-icon">
            <ul className="h">
              <li className="myad-icon">
                <IoCheckmarkSharp />
                Active(3)
              </li>
              <li className="myad-icon">
                <LuClock9 /> Reviewing(2)
              </li>
              <li className="myad-icon">
                <FaPen />
                Draft(2)
              </li>
              <li className="myad-icon">
                <IoHandRightSharp />
                Declined(0)
              </li>
              <li className="myad-icon">
                <IoCloseCircleSharp />
                Closed(3)
              </li>
              <li className="myad-icon">
                <IoChevronDownCircleSharp />
                All(1)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="h-px w-full bg-gray-200 dark:bg-gray-700" />
    </div>
  );
}
export default Followers;
