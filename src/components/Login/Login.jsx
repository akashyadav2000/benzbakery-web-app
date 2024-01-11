import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <>
      <form>
        <div className="account-container">
          <div className="login-image-container">
            <img src="./Images/Login_Background.jpg" alt="Login_Background" />
          </div>
          <div className="login-container" id="">

            <div className="login-title">Login</div>

            <div className="user-details">

              <span className="login_details">Email id</span>
              <input type="email" id="txtemail" placeholder="Enter your email" required=""
                style={{ textTransform: "none" }} className="text-box" />

              <span className="login_details">Password</span>
              <input type="password" id="txtpass" placeholder="Password" required=""
                style={{ textTransform: "none" }} className="text-box" />
              <i className="fa fa-eye-slash" id="eye" aria-hidden="true"></i>


              <button id="" className="login-btn">Login</button>
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