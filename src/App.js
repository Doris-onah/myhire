import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from ".//components/homepage/HomePage";
import Layout from "./components/Layout";
import Register from "./components/Register";
import Login from "./components/Login";
import SedanCars from "../src/components/Browsecars/SedanCars";
import SuvsCars from "../src/components/Browsecars/SuvsCars";
import ExclusiveCars from "../src/components/Browsecars/ExclusiveCars";
import PopularCars from "../src/components/Browsecars/PopularCars";
import Account from "./components/userAccount/Account";
import UserProfile from "./components/userAccount/UserProfile";
import Followers from "./components/Userprofile/Followers";
import MyFaq from "./components/Userprofile/MyFaq";
import FeedBack from "./components/Userprofile/FeedBack";
import MyVehicle from "./components/Userprofile/MyVehicle";
import MyAdvert from "./components/Userprofile/MyAdvert";
import Notifications from "./components/userAccount/Notifications";
import Bookmark from "./components/userAccount/Bookmark";
import Chat from "./components/userAccount/Chat";
import UserMenu from "./components/userAccount/UserMenu";
import UploadCar from "./components/userAccount/UploadCar";
import CarDetails from "./components/userAccount/CarDetails";
import FormContextProvider from "./components/userAccount/FormContext";
import CarUploaded from "./components/userAccount/CarUploaded";

function App() {
  return (
    <FormContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route path="Cars" element={<HomePage />}>
              <Route index path="PopularCars" element={<PopularCars />} />
              <Route path="SuvsCars" element={<SuvsCars />} />
              <Route path="SedanCars" element={<SedanCars />} />{" "}
              <Route path="CarDetails" element={<CarDetails />} />
              <Route path="ExclusiveCars" element={<ExclusiveCars />}>
                <Route
                  path="/Cars/ExclusiveCars/:CarUploadedId"
                  element={<CarUploaded />}
                />
              </Route>
            </Route>

            <Route path="Account" element={<Account />}>
              <Route index element={<Bookmark />} />
              <Route path="Chat" element={<Chat />} />
              <Route path="Notifications" element={<Notifications />} />
              <Route path="UserMenu" element={<UserMenu />} />
              <Route path="UploadCar" element={<UploadCar />} />
              <Route path="UserProfile" element={<UserProfile />}>
                <Route index element={<MyAdvert />} />
                <Route path="Followers" element={<Followers />} />
                <Route path="MyFaq" element={<MyFaq />} />
                <Route path="FeedBack" element={<FeedBack />} />
                <Route path="MyVehicle" element={<MyVehicle />} />
              </Route>{" "}
            </Route>

            <Route path="Register" element={<Register />} />
            <Route path="Login" element={<Login />} />
          </Route>
        </Routes>{" "}
      </div>
    </FormContextProvider>
  );
}

export default App;
