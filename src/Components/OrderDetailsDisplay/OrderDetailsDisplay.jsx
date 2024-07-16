
import React, { useState } from "react";
import "./OrderDetailsDisplay.css";
import { Link } from "react-router-dom";

const OrderDetailsDisplay = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    town: "",
    city: "",
    state: "",
    pin: "",
  });

  const [error, setError] = useState("");
  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, address, town, city, state, pin } = formData;

    if (!name || !phone || !address || !town || !city || !state || !pin) {
      setError("Please fill all the details.");
      setFormValid(false);
    } else {
      setError("");
      setFormValid(true);
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
                required
              />
              <input
                type="tel"
                placeholder="Phone No."
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
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
                  required
                />
                <input
                  type="text"
                  placeholder="Locality/Town"
                  name="town"
                  value={formData.town}
                  onChange={handleChange}
                  required
                />

                <div className="place-details-city">
                  <input
                    type="text"
                    placeholder="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>

                <input
                  type="text"
                  placeholder="Pin code"
                  name="pin"
                  value={formData.pin}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <br />
            
            {error && <p className="error-message">{error}</p>}

            {formValid ? (
              <Link to='/orderplaced'>
                <button type="button">PLACE ORDER</button>
              </Link>
            ) : (
              <button type="submit">PLACE ORDER</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderDetailsDisplay;















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
//               <input type="text" name="name" placeholder="Name" required/>
//               <input type="tel" placeholder="Phone No." name="phone" required/>
//               <br />

//               <div className="address-details">
//                 <label for="last name">Address:</label>
//                 <input
//                   type="address"
//                   placeholder="Address(House no, Building, street, Area)" name="address"
//                   required
//                 />

//                 <input type="text" placeholder="Locality/Town" name="town" required/>

//                 <div className="place-details-city">
//                   <input type="text" placeholder="City" name="city" required/>
//                   <input type="text" placeholder="State" name="state" required/>
//                 </div>

                
//                   <input type="text" placeholder="Pin code" name="pin" required/>
                
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


