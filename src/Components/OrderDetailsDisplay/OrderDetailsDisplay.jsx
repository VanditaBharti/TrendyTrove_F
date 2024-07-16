// import React from "react";
// import "./OrderDetailsDisplay.css";
// import { Link } from "react-router-dom";

// const OrderDetailsDisplay = () => {
//   return (
//     <div>
//       <div className="orderdetails">
//         <form action="#" method="GET">
//           <div className="place-details-fields">
//             <div className="place-details-left">
//               <p>Delivery Information</p>
//             </div>
//             <br />

//             <div className="multi-fields">
//               <label for="first name">Contact Details</label>
//               <input type="text" name="name" placeholder="Name" />
//               <input type="tel" placeholder="Phone No." name="phone"/>
//               <br />

//               <div className="address-details">
//                 <label for="last name">Address:</label>
//                 <input
//                   type="address"
//                   placeholder="Address(House no, Building, street, Area)" name="address"
//                 />

//                 <input type="text" placeholder="Locality/Town" name="town"/>

//                 <div className="place-details-city">
//                   <input type="text" placeholder="City" name="city"/>
//                   <input type="text" placeholder="State" name="state"/>
//                 </div>

                
//                   <input type="text" placeholder="Pin code" name="pin"/>
                
//               </div>
//             </div>
//             <br />

//             <Link to='/orderplaced'>
//               <button>PLACE ORDER</button>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default OrderDetailsDisplay;


import React, { useState } from "react";
import "./OrderDetailsDisplay.css";
// import { Link } from "react-router-dom";

const OrderDetailsDisplay = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    town: "",
    city: "",
    state: "",
    pin: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, address, town, city, state, pin } = formData;
    
    if (!name || !phone || !address || !town || !city || !state || !pin) {
      setError("Please fill all the details.");
    } else {
      setError("");
      // Add your form submission logic here, for example, redirect to the order placed page
      window.location.href = "/orderplaced";
      // <Link to={"/orderplaced"}></Link>
    }
  };

  return (
    <div>
      <div className="orderdetails">
        <form onSubmit={handleSubmit}>
          <div className="place-details-fields">
            <div className="place-details-left">
              <p>Delivery Information</p>
            </div>
            <br />

            <div className="multi-fields">
              <label htmlFor="name">Contact Details</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="tel"
                placeholder="Phone No."
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <br />

              <div className="address-details">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  placeholder="Address(House no, Building, street, Area)"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  placeholder="Locality/Town"
                  name="town"
                  value={formData.town}
                  onChange={handleChange}
                />

                <div className="place-details-city">
                  <input
                    type="text"
                    placeholder="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>

                <input
                  type="text"
                  placeholder="Pin code"
                  name="pin"
                  value={formData.pin}
                  onChange={handleChange}
                />
              </div>
            </div>
            <br />

            {error && <p className="error">{error}</p>}

            <button type="submit">PLACE ORDER</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderDetailsDisplay;