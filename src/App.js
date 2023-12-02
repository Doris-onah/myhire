import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./homepage/HomePage";
import Layout from "./components/Layout";
import Register from "./components/Register";
import Login from "./components/Login";
import SedanCars from "./Browsecars/SedanCars";
import SuvsCars from "./Browsecars/SuvsCars";
import ExclusiveCars from "./Browsecars/ExclusiveCars";
import PopularCars from "./Browsecars/PopularCars";
import Account from "./userAccount/Account";
import UserProfile from "./userAccount/UserProfile";
import Followers from "./Userprofile/Followers";
import MyFaq from "./Userprofile/MyFaq";
import FeedBack from "./Userprofile/FeedBack";
import MyVehicle from "./Userprofile/MyVehicle";
import MyAdvert from "./Userprofile/MyAdvert";
import Notifications from "./userAccount/Notifications";
import Bookmark from "./userAccount/Bookmark";
import Chat from "./userAccount/Chat";
import UserMenu from "./userAccount/UserMenu";
import UploadCar from "./userAccount/UploadCar";
import FormContextProvider from "./formcontext/FormContext";
import CarUploaded from "./userAccount/CarUploaded";
import HowItWorks from "./howitworks/HowItWorks";

import Cars from "./Browsecars/Cars";
import Review from "./reviewcomponent/Review";
import WhyChoose from "./choose/WhyChoose";

function App() {
  return (
    <FormContextProvider>
      <div className="App ">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="Cars" element={<Cars />}>
              <Route index element={<PopularCars />} />
              <Route path="SuvsCars" element={<SuvsCars />} />
              <Route path="SedanCars" element={<SedanCars />} />{" "}
              <Route path="ExclusiveCars" element={<ExclusiveCars />} />
            </Route>
            <Route path="howitworks" element={<HowItWorks />} />
            <Route path="choose" element={<WhyChoose />} />
            <Route path="review" element={<Review />} />
            <Route path="Register" element={<Register />} />
            <Route path="Login" element={<Login />} />
            <Route path="CarUploaded" element={<CarUploaded />}>
              <Route
                path="/CarUploaded/:CarUploadedId"
                element={<CarUploaded />}
              />
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
          </Route>
        </Routes>{" "}
      </div>
    </FormContextProvider>
  );
}

export default App;
