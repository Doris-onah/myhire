import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './/components/homepage/HomePage';
import Layout from './components/Layout';
import Register from './components/Register';
import Review from './components/Review';
import WhyChooseUs from './components/WhyChooseUs';
import Login from './components/Login';
import HowItWorks from './components/howitworks/HowItWorks';
import RentalDetails from './components/Browsecars/RentalDetails';
import Account from './components/userAccount/Account';

function App() {
  return (
    <div className="App">
    <Routes>

   <Route path="/" element={<Layout />}>
   <Route index element={<HomePage />}/>
    
   <Route path="HowItWorks" element={<HowItWorks />}/>
   <Route path="RentalDetails" element={<RentalDetails />}>
   {/* <Route index path="/RentalDetails/*" element={<PopularCars />}/>
     <Route path="Suvs" element={<Suvs />}/>
     <Route path="SedanCars" element={<SedanCars />}/>
     <Route path="ExclusiveCars" element={<ExclusiveCars />}/> */}
   </Route>

  
   <Route path="WhyChooseUs" element={<HomePage/>}/>
   
   <Route Component={<WhyChooseUs/>}/>

   <Route path="Review" element={<Review />}/>
   <Route path='Register' element={<Register />}>
     <Route path='Login' element={<Login />}/>
   </Route>
  
   <Route path='Login' element={<Login />}>
   <Route path="Account" element={<Account />}/>
     <Route path='Register' element={<Register />}/>
   </Route>
   
   
   
   </Route>

 </Routes>

 </div>


    // <div className="App">
    //    <Routes>

    //   <Route path="/" element={<Layout />}>

    //   <Route index element={<HomePage />}/>
    //   <Route path="HowItWorks" element={<HowItWorks />}/>
    //   <Route path="RentalDetails" element={<RentalDetails />}/>
    //   <Route path="WhyChooseUs" element={<WhyChooseUs />}/>
    //   <Route path="Review" element={<Review />}/>
    //   <Route path='Register' element={<Register />}/>
    //   <Route path='Login' element={<Login />}/>
      
      
    //   </Route>

    // </Routes>
  
    // </div>
  );
}

export default App;
