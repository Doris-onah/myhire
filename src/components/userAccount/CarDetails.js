import React from "react";

import { useContext } from "react";
import { FormContext } from "../userAccount/FormContext";
function CarDetails() {
  const { formData } = useContext(FormContext);
  return (
    <div>
      <h2>Type: {formData.Name}</h2>
      <h2>Cost Per Hire: </h2>
      <h2>Location: {formData.location}</h2>
      <h2>
        Destinations: {formData.destination} {"state"}
      </h2>
      <h2>Vehicle Size: Large</h2>
      <h2>Vehicle issurance: {formData.inssurance}</h2>
      <h2>vehicle's Payload Capacity: {formData.payload}</h2>
      <h2>Reputation Score:</h2>
      <img src={formData.file} alt="Uploaded" />
      {formData.file}
    </div>
  );
}
export default CarDetails;
