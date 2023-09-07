import React from "react";
import "./Review.css"
// import { useState,useEffect } from "react";


function Review() {
    // const [review, setReview] = useState([])
    // useEffect(() => {
    //     fetch(`https://type.fit/api/quotes`)
    //     .then((response) => {
    //             return response.json()})
    //     .then((data) => {
    //         setReview(data)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // },[]);
    return (
        <div id="Review" className="bg-gradient-to-r from-purple-600 to-pink-600 w-full h-[100%] bg-green-300 flex items-center justify-center">
        
            <div className="review-section w-[90%] flex flex-col justify-center items-center">
                <div className="review-header">
                    <div className="review-header-content text-white">
            <h1 className="md:block hidden text-4xl">See What Our Trusted Customers Are Saying</h1>
                <p className="md:block hidden ">your review could be next</p>
                <h1 className="md:hidden block text-2xl">Trusted by Thousands of Happy Customer</h1>
                 <p className="md:hidden block">A high-performing web-based car rental system for any rent-a-car
                     company and website
                  </p>
                </div>
                </div>
                {/* api starts from here */}
                        {/* this is for larger view section */}
                <div className="review-box ">
                {/* {review?.map((quote, index) => { */}
                    {/* return ( */}
                
                        <div className="review-con2 ">
                        <div className="user-review ">
                            <div className="review-profile">
                                <div className="rounded-[100%] w-[40px] h-[40px] bg-gray-200"></div>
                        <div>
                         <h1 className="text-2xl">John Doe </h1>
                        <p>country name</p>
                        </div>
                      </div>

                      <div className="ratings">
                      4.5 
                      </div>
                      </div>
                      <br/>
                  

                       <div className="review-content">
                         <p>“I had a great experience with this company.
                             The staff was very friendly and helpful.
                              I would definitely recommend this company 
                              to anyone looking to rent a car.”</p>
                              </div>
                    </div>

             
                    {/* ) */}
                {/* })} */}
                   
                </div>

                    
                </div>
        </div>
    );
}
export default Review;