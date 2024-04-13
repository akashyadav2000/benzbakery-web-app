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
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    const updatedErrorMessages = {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Invalid email address',
      password: /^(?=.*[A-Za-z0-9])(?=.*[@#$%^&+=])[A-Za-z0-9@#$%^&+=]{8,}$/.test(password)
        ? ''
        : 'Password should be 8 characters long with at least 1 special character and 1 number',
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

  const login_handleSubmit = (event) => {
    event.preventDefault();
  }


  return (
    <>

      <form onClick={login_handleSubmit}>
        <div className="login-container">

          <div className="login-image-container">
            <img src="./Images/Login_Background.jpg" alt="Login_Background" />
          </div>

          <div className="login-form-container" id="login-page">

            <div className="login-user-details">
              <div className="login-title">LOGIN</div>

              <span className="login-details">Email id</span>
              <input type="email" id="email" placeholder="Enter your email" required=""
                style={{ textTransform: "none" }} className="login-text-box" />
              <p className="login-error-messages">{errorMessages.email}</p>


              <span className="login-details">Password</span>
              <input type={eye ? 'password' : 'text'} id="pass" placeholder="Password" required=""
                style={{ textTransform: "none" }} className="login-pass-box login-text-box" />

              {eye ? <FontAwesomeIcon className='login-password-eye' icon={faEye} onClick={handlePasswordEye} /> : <FontAwesomeIcon className='login-password-eye' icon={faEyeSlash} onClick={handlePasswordEye} />}
              <p className="login-error-messages">{errorMessages.password}</p>


              <button id="login_btn" className="login-btn" onClick={handleLogin}>Log In</button>


              <Link to={"/benzbakery-web-app/Signup"} className="signup-line">Don't have an account ?
                <span className="signup-link">Sign up</span></Link>

              <Link to="" className="forgot-pwd">Forgot Password? </Link>

            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Login