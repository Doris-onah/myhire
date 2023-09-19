import { Outlet } from "react-router-dom";
import UserHeader from "./UserHeader";

function Account() {
  return (
    <div className="">
      <UserHeader />
      <Outlet />
    </div>
  );
}
export default Account;
