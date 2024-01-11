import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons'

function Signup() {
  return (
    <>

      <div className="container">

        <div className="image-container">
          <img src="./Images/Login_Background.jpg" alt="Signup_Background" />
        </div>

        <div className="register-container" id="registration-page">

          <div className="signup-title">Registration</div>

          <div className="user-details">

            <span className="details">User Name</span>
            <input type="text" id="txtuname" placeholder="Enter your name" required="" style={{ textTransform: "none" }} className="text-box" />

            <span className="details">Email</span>
            <input type="email" id="txtemail" placeholder="Enter your email" required="" style={{ textTransform: "none" }} className="text-box" />


            <span className="details">Mobile Number</span>
            <input type="number" id="txtmobile" placeholder="Enter your number" required="" className="text-box" onKeyUp="if (event.srcElement.value.charAt(0) == '0') { event.srcElement.value = event.srcElement.value.slice(1); }" onKeyPress="return this.value.length<=9" />


            <span className="details">Address</span>
            <input type="text" id="txtaddress" placeholder="Enter your address" required="" className="text-box" />


            <span className="details">Password</span>
            <input type="password" id="txtpass" placeholder="Password" required="" style={{ textTransform: "none" }} className="text-box" />
            <FontAwesomeIcon id="eye" aria-hidden="true" icon={faEyeSlash} />

            <span className="details">Confirm Password</span>
            <input type="password" id="txtcpass" placeholder="Confirm Password" className="text-box" required="" style={{ textTransform: "none" }} />
            <FontAwesomeIcon id="eyes" aria-hidden="true" icon={faEyeSlash} />

            <button id="signup_btn" className="sign-up-btn" OnClick="signup_btn_Click">Signup</button>

            <Link to={"/benzbakery-web-app/Login"} className="login-line">Have an account already? <span className="login-link">log in</span></Link>

          </div>

        </div>
      </div>
    </>
  )
}

export default Signup