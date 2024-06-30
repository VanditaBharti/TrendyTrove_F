import React from "react";
import "./OrderDetailsDisplay.css";
import { Link } from "react-router-dom";

const OrderDetailsDisplay = () => {
  return (
    <div>
      <div className="orderdetails">
        <form action="#" method="GET">
          <div className="place-details-fields">
            <div className="place-details-left">
              <p>Delivery Information</p>
            </div>
            <br />

            <div className="multi-fields">
              <label for="first name">Contact Details</label>
              <input type="text" name="name" placeholder="Name" />
              <input type="tel" placeholder="Phone No." name="phone"/>
              <br />

              <div className="address-details">
                <label for="last name">Address:</label>
                <input
                  type="address"
                  placeholder="Address(House no, Building, street, Area)" name="address"
                />

                <input type="text" placeholder="Locality/Town" name="town"/>

                <div className="place-details-city">
                  <input type="text" placeholder="City" name="city"/>
                  <input type="text" placeholder="State" name="state"/>
                </div>

                
                  <input type="text" placeholder="Pin code" name="pin"/>
                
              </div>
            </div>
            <br />

            <Link to='/orderplaced'>
              <button>PLACE ORDER</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default OrderDetailsDisplay;
