import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from ".//components/homepage/HomePage";
import Layout from "./components/Layout";
import Register from "./components/Register";
import Login from "./components/Login";
import HowItWorks from "./components/howitworks/HowItWorks";
import Account from "./components/userAccount/Account";
import SedanCars from "../src/components/Browsecars/SedanCars";
import SuvsCars from "../src/components/Browsecars/SuvsCars";
import ExclusiveCars from "../src/components/Browsecars/ExclusiveCars"
import PopularCars from "../src/components/Browsecars/PopularCars"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="HowItWorks" element={<HowItWorks />} />

          <Route path="Cars" element={<HomePage />}>
             <Route path="PopularCars" element={<PopularCars />}/>
                <Route path="SuvsCars" element={<SuvsCars />}/>
                 <Route path="SedanCars" element={<SedanCars />}/>
                  <Route path="ExclusiveCars" element={<ExclusiveCars />}/>
                    </Route>
          <Route path="WhyChooseUs" element={<HomePage />} />
          <Route path="Register" element={<Register />}>
            <Route path="Login" element={<Login />} />
          </Route>

          <Route path="Login" element={<Login />}>
            <Route path="Account" element={<Account />} />
            <Route path="Register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </div>

  );
}

export default App;
