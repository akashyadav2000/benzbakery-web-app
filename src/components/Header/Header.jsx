import React from 'react'
import { Link, NavLink, useAsyncValue } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Headaer() {
  const cart = useSelector(store => store.cart);

  function toggleMobileMenu(menu) {
    menu.classList.toggle("open");
  }

  return (
    <>
      <header>
        <Link to={"/benzbakery-web-app/"} className="logo"><img src="./Images/Benz_Logo.png" /></Link>


        <nav className="navigate">
          <ul>

            <li>
              <NavLink to={"/benzbakery-web-app/"}

              >Home</NavLink>
            </li>
            <li><Link to={"/benzbakery-web-app/Product"} >Product</Link>
              <ul>
                <li><Link to={'Cake'}>Cakes</Link></li>
                <li><Link to={'Pastry'}>Pastrys</Link></li>
                <li><Link to={'CupCake'}>Cup Cakes</Link></li>
                <li><Link to={'WeddingCake'}>Wedding Cakes</Link></li>
              </ul>
            </li>

            <li>
              <NavLink to={"/benzbakery-web-app/About"}

              >About</NavLink>
            </li>
            <li><Link to={"/benzbakery-web-app/Feedback"}>Feedback</Link></li>

          </ul>
        </nav>


        {/* <nav className="search__navigate">
          <ul>

            <div className='header__search'>
              <input className='header__searchInput' type='text' />
              <FontAwesomeIcon className='header__searchIcon' icon={faMagnifyingGlass} />
            </div>

          </ul>
        </nav> */}


        <div className="user-cart">

          <Link to={"/benzbakery-web-app/Cart"} className=""><img src="./Images/Cart.png" className="cart" /><span className='cart-count'>{cart.length}</span></Link>
          <Link to={"/benzbakery-web-app/Login"} className=""><img src="./Images/login-2.png" className="login" /></Link>

        </div>

        <div id="hamburger-icon" onClick={(e) => toggleMobileMenu(e.currentTarget)}>

          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>

          <ul className="mobile-menu">

            <li><Link to={"/benzbakery-web-app/"}>Home</Link></li>
            <li><Link to={"/benzbakery-web-app/Product"} >Product</Link></li>
            <li><Link to={"/benzbakery-web-app/About"}>About</Link></li>
            <li><Link to={"/benzbakery-web-app/Feedback"}>Feedback</Link></li>
            <li><Link to={"/benzbakery-web-app/Cart"}>Cart</Link></li>
            <li><Link to={"/benzbakery-web-app/Login"} >Login</Link></li>

          </ul>
        </div>
      </header>
    </>
  )
}

export default Headaer