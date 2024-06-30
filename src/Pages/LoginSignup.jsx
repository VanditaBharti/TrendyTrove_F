import React from "react";
import "./CSS/LoginSignup.css";
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>

        <form action="#" method="GET">
          <div className="loginsignup-fields">
            <input type="text" placeholder="Your Name" name="fn" />

            <input type="email" placeholder="Email Address" name="em" />

            <input type="password" placeholder="Password" name="ps" />
            <button type="submit">Continue</button>
            {/* <input type="submit" value="Continue"/> */}
          </div>
          <p className="loginsignup-login">
            Already have an account? <span>Login here</span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name="ch" id="agree" />
            <label For="agree">
              By continuing, i agree to the terms and privacy policy.{" "}
            </label>
          </div>
        </form>
      </div>

      {/* <div className="loginsignup-fields">

          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />

        </div> */}
      {/* <button>Continue</button> */}
      {/* <p className='loginsignup-login'>Already have an account? <span>Login here</span></p> */}
      {/* <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms and privacy policy. </p>
        </div> */}
    </div>
    // </div>
  );
};

export default LoginSignup;
