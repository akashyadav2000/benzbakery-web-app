import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Login.css'
// import { Input } from 'postcss'
import { Eye, EyeOff } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'

function Login() {

  const [eye, setEye] = useState(true)

  const handlePasswordEye = () => {
    setEye(!eye)
  }

  const [errorMessages, setErrorMessages] = useState({
    email: '',
    password: '',
  });


  const validateInputs = () => {
    const email = document.getElementById('txtemail').value;
    const password = document.getElementById('txtpass').value;

    const updatedErrorMessages = {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Invalid email address.',
      password: /^(?=.*[A-Za-z0-9])(?=.*[@#$%^&+=])[A-Za-z0-9@#$%^&+=]{8,}$/.test(password)
        ? ''
        : 'Password should be 8 characters long with at least 1 special character and 1 number.',
    };

    setErrorMessages(updatedErrorMessages);

    return Object.values(updatedErrorMessages).every((message) => message === '');
  };


  const handleLogin = () => {
    if (validateInputs()) {
      console.log('Login successful!');
      // Add login logic here
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <form onClick={handleSubmit} className='login-form'>
        <div className="account-container">
          <div className="login-image-container">
            <img src="./Images/Login_Background.jpg" alt="Login_Background" />
          </div>
          <div className="login-container" id="">

            <div className="login-title">Login</div>

            <div className="user-details">

              <span className="login_details">Email id</span>
              <input type="email" id="txtemail" placeholder="Enter your email" required=""
                style={{ textTransform: "none" }} className="login-text-box" />
              <p className="error-login-messages">{errorMessages.email}</p>


              <span className="login_details">Password</span>

              <input type={eye ? 'password' : 'text'} id="txtpass" placeholder="Password" required=""
                style={{ textTransform: "none" }} className="login-text-box" />

              {eye ? <FontAwesomeIcon className='login-password-eye' icon={faEye} onClick={handlePasswordEye} /> : <FontAwesomeIcon className='login-password-eye' icon={faEyeSlash} onClick={handlePasswordEye} />}
              <p className="error-login-messages">{errorMessages.password}</p>


              {/* {password ? (<Eye className="password-eye" onClick={handlePasswordEye} />) : (<EyeOff className="password-eye" onClick={handlePasswordEye} />)} */}


              <button id="" className="login-btn" onClick={handleLogin}>Login</button>
              <div>
                <Link to={"/benzbakery-web-app/Signup"} className="sign-up-line">Don't have an account ?
                  <span className="sign-up-link">Sign up</span></Link>
              </div>
              <Link to="" className="forgot-pwd">Forgot Password? </Link>

            </div>


          </div>
        </div>
      </form>
    </>
  )
}

export default Login