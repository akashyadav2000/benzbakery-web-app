import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-brands-svg-icons'
import { } from '@fortawesome/free-regular-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './Display.css'

function Display() {
  return (
    <>
      <section id="home" className="home">
        <h1>Every Flavor Has A Story</h1>
        <p>
          Love is like a cake, you have to cook it well<br />
          to be able to savor it.
        </p>
        <div className="home-btn">
          <Link to={"/benzbakery-web-app/Cart"} className="slogan">Book Now
            <FontAwesomeIcon className='angle-right' icon={faAngleRight} />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Display