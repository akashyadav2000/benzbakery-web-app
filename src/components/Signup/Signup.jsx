
import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import './Signup.css';

function Signup() {
  const [eye, setEye] = useState(true);
  const [ceye, setCeye] = useState(true);
  const [errorMessages, setErrorMessages] = useState({
    username: '',
    email: '',
    mobileNumber: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const handlePasswordEye = () => {
    setEye(!eye);
  };

  const handlePasswordCeye = () => {
    setCeye(!ceye);
  };

  const validateInputs = () => {
    const username = document.getElementById('uname').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobile').value;
    const address = document.getElementById('address').value;
    const password = document.getElementById('pass').value;
    const confirmPassword = document.getElementById('cpass').value;

    const updatedErrorMessages = {
      username: /^[A-Za-z]+$/.test(username) ? '' : 'Name should only contain alphabets',
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Invalid email address',
      mobileNumber: /^\d{10,}$/.test(mobileNumber) ? '' : 'Mobile number should contain at least 10 digits',
      address: address.replace(/\s/g, '').length >= 10 ? '' : 'Address should contain at least 10 characters',
      password: /^(?=.*[A-Za-z0-9])(?=.*[@#$%^&+=])[A-Za-z0-9@#$%^&+=]{8,}$/.test(password)
        ? ''
        : 'Password should be 8 characters long with at least 1 special character and 1 number',
      confirmPassword: password === confirmPassword ? '' : 'Passwords do not match',
    };

    setErrorMessages(updatedErrorMessages);

    return Object.values(updatedErrorMessages).every((message) => message === '');
  };

  const handleSignup = () => {
    if (validateInputs()) {
      console.log('Signup successful!');
      // Add signup logic here
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };


  return (
    <>
      <form onClick={handleSubmit}>
        <div className="signup-container">

          <div className="signup-image-container">
            <img src="./Images/Login_Background.jpg" alt="Signup_Background" />
          </div>

          <div className="signup-form-container" id="signup_form_container">
            {/* id="registration-page" */}

            <div className="signup-user-details">
              <div className="signup-title">REGISTRATION</div><br />
              <span className="signup-details">User Name</span>
              <input type="text" id="uname" placeholder="Enter your name" required="" style={{ textTransform: "none" }} className="signup-text-box" />
              <p className="signup-error-messages">
                {errorMessages.username}</p>


              <span className="signup-details">Email</span>
              <input type="email" id="email" placeholder="Enter your email" required="" style={{ textTransform: "none" }} className="signup-text-box" />
              <p className="signup-error-messages" >{errorMessages.email}</p>

              <span className="signup-details">Mobile Number</span>
              <input type="number" id="mobile" placeholder="Enter your number" required="" className="signup-text-box" />
              <p className="signup-error-messages" >{errorMessages.mobileNumber}</p>

              <span className="signup-details">Address</span>
              <input type="text" id="address" placeholder="Enter your address" required="" className="signup-text-box" />
              <p className="signup-error-messages" >{errorMessages.address}</p>


              <span className="signup-details">Password</span>


              <input type={eye ? 'password' : 'text'} id="pass" placeholder="Password" required=""
                style={{ textTransform: "none" }} className="signup-pass-box signup-text-box" />


              {eye ? <FontAwesomeIcon className='signup-password-eye' icon={faEye} onClick={handlePasswordEye} /> : <FontAwesomeIcon className='signup-password-eye' icon={faEyeSlash} onClick={handlePasswordEye} />}
              <p className="signup-error-messages" >{errorMessages.password}</p>

              <span className="signup-details">Confirm Password</span>


              <input type={ceye ? 'password' : 'text'} id="cpass" placeholder="Confirm Password" required=""
                style={{ textTransform: "none" }} className="signup-pass-box signup-text-box" />


              {ceye ? <FontAwesomeIcon className='signup-password-eye' icon={faEye} onClick={handlePasswordCeye} /> : <FontAwesomeIcon className='signup-password-eye' icon={faEyeSlash} onClick={handlePasswordCeye} />}
              <p className="signup-error-messages" >{errorMessages.confirmPassword}</p>

              <button id="signup_btn" className="signup-btn" onClick={handleSignup}>Sign Up</button>

              <Link to={"/benzbakery-web-app/Login"} className="login-line">Have an account already ?<span className="login-link">log in</span></Link>


            </div>

          </div>
        </div>

      </form>


    </>
  )
}

export default Signup