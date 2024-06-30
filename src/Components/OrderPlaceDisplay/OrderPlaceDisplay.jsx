import React from "react";
import orderPlace_v from "../Assets/orderplace_v.mp4";
import "./OrderPlaceDisplay.css";
const OrderPlaceDisplay = () => {
  return (
    <div>
      <div className="orderplace">
        
          <video src={orderPlace_v} />
          <br />
          <h1>ORDER PLACED</h1>
        
      </div>
    </div>
  );
};
export default OrderPlaceDisplay;
