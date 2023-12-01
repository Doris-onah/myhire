import { Outlet } from "react-router-dom";
import UserHeader from "./UserHeader";

function Account() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <UserHeader />
      <Outlet />
    </div>
  );
}
export default Account;
