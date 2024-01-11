
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
    const username = document.getElementById('txtuname').value;
    const email = document.getElementById('txtemail').value;
    const mobileNumber = document.getElementById('txtmobile').value;
    const address = document.getElementById('txtaddress').value;
    const password = document.getElementById('txtpass').value;
    const confirmPassword = document.getElementById('txtcpass').value;

    const updatedErrorMessages = {
      username: /^[A-Za-z]+$/.test(username) ? '' : 'Name should only contain alphabets.',
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Invalid email address.',
      mobileNumber: /^\d{10,}$/.test(mobileNumber) ? '' : 'Mobile number should contain at least 10 digits.',
      address: address.replace(/\s/g, '').length >= 10 ? '' : 'Address should contain at least 10 characters.',
      password: /^(?=.*[A-Za-z0-9])(?=.*[@#$%^&+=])[A-Za-z0-9@#$%^&+=]{8,}$/.test(password)
        ? ''
        : 'Password should be 8 characters long with at least 1 special character and 1 number.',
      confirmPassword: password === confirmPassword ? '' : 'Passwords do not match.',
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
        <div className="container">

          <div className="image-container">
            <img src="./Images/Login_Background.jpg" alt="Signup_Background" />
          </div>

          <div className="register-container" id="registration-page">



            <div className="user-details">
              <div className="signup-title">Registration</div><br />
              <span className="details">User Name</span>
              <input type="text" id="txtuname" placeholder="Enter your name" required="" style={{ textTransform: "none" }} className="text-box" />
              <p className="error-messages" >{errorMessages.username}</p>


              <span className="details">Email</span>
              <input type="email" id="txtemail" placeholder="Enter your email" required="" style={{ textTransform: "none" }} className="text-box" />
              <p className="error-messages" >{errorMessages.email}</p>

              <span className="details">Mobile Number</span>
              <input type="number" id="txtmobile" placeholder="Enter your number" required="" className="text-box" />
              <p className="error-messages" >{errorMessages.mobileNumber}</p>

              <span className="details">Address</span>
              <input type="text" id="txtaddress" placeholder="Enter your address" required="" className="text-box" />
              <p className="error-messages" >{errorMessages.address}</p>


              <span className="details">Password</span>


              <input type={eye ? 'password' : 'text'} id="txtpass" placeholder="Password" required=""
                style={{ textTransform: "none" }} className="text-box" />


              {eye ? <FontAwesomeIcon className='password-eye' icon={faEye} onClick={handlePasswordEye} /> : <FontAwesomeIcon className='password-eye' icon={faEyeSlash} onClick={handlePasswordEye} />}
              <p className="error-messages" >{errorMessages.password}</p>

              <span className="details">Confirm Password</span>


              <input type={ceye ? 'password' : 'text'} id="txtcpass" placeholder="Confirm Password" required=""
                style={{ textTransform: "none" }} className="text-box" />


              {ceye ? <FontAwesomeIcon className='password-eye' icon={faEye} onClick={handlePasswordCeye} /> : <FontAwesomeIcon className='password-eye' icon={faEyeSlash} onClick={handlePasswordCeye} />}
              <p className="error-messages" >{errorMessages.confirmPassword}</p>

              <button id="signup_btn" className="sign-up-btn" onClick={handleSignup}>Signup</button>

              <Link to={"/benzbakery-web-app/Login"} className="login-line">Have an account already? <span className="login-link">log in</span></Link>


            </div>

          </div>
        </div>

      </form>


    </>
  )
}

export default Signup