import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <>
      <footer>

        <div className="foot-row">

          <div className="foot-col">

            <img src="./Images/Benz_footer_Logo.png" className="f-logo" alt="Cakef-logo" />
            <p>

              We have aim to provide fresh and high quality baked goods for the Mumbai area. So please enjoy – this is our tradition.
            </p>
          </div>

          <div className="foot-col">
            <h3>Shop
              <div className="underline"><span></span></div>
            </h3>
            <p>T.P Road</p>
            <p>Tembipada,Bhandup (West)</p>
            <p>Maharashtra, PIN 400078, India</p>
            <p className="email-id">Benzbakeryofficial@gmail.com</p>
            <h3> Mon - Sun &nbsp; &nbsp;   10Am &nbsp;10Pm</h3>
          </div>

          <div className="foot-col">
            <h3>Links
              <div className="underline"><span></span></div>
            </h3>

            <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/"}>Products</Link></li>
              <li><Link to={"About"}>About</Link></li>
              <li><Link to={"Feedback"}>Feedback</Link></li>
            </ul>

          </div>

          <div className="foot-col">
            <h3>Newsletter
              <div className="underline"><span></span></div>
            </h3>

            <div className="newsletter">

              <FontAwesomeIcon className='icon' icon={faEnvelope} />
              <input type="email" placeholder="Enter your email id" />
              <button to="" tittle="buynow_fbtn"><FontAwesomeIcon className='icon_2' icon={faArrowRight} />
              </button>
            </div>


            <div className="social-icons">

              <div className="iconic">
                <Link to="https://www.facebook.com/" className="">
                  <FontAwesomeIcon icon={faFacebookF} /></Link>
                <Link to="https://www.instagram.com/" className="">
                  <FontAwesomeIcon icon={faInstagram} /></Link>
                <Link to="https://www.twitter.com/" className="">
                  <FontAwesomeIcon icon={faTwitter} /></Link>
                <Link to="https://www.youtube.com/" className="">
                  <FontAwesomeIcon icon={faYoutube} /></Link>
              </div>

            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">Benz Bakery @ All Right Reserved</p>


      </footer>

    </>
  )
}

export default Footer