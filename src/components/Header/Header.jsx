import React from 'react'
import { Link, NavLink, useAsyncValue } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Headaer() {
  const cart = useSelector(store => store.cart)

  return (
    <>
      <header>
        <Link to={"/"} className="logo"><img src="./Images/Benz_Logo.png" /></Link>


        <nav className="navigate">
          <ul>

            <li>
              <NavLink to={"/"}

              >Home</NavLink>
            </li>
            <li><Link to={"/"} >Product</Link>
              <ul>
                <li><Link to={'Cake'}>Cakes</Link></li>
                <li><Link to={'Pastry'}>Pastrys</Link></li>
                <li><Link to={'CupCake'}>Cup Cakes</Link></li>
                <li><Link to={'WeddingCake'}>Wedding Cakes</Link></li>
              </ul>
            </li>

            <li>
              <NavLink to={"About"}

              >About</NavLink>
            </li>
            <li><Link to={"Feedback"}>Feedback</Link></li>

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

          <Link to={"Cart"} className=""><img src="./Images/Cart.png" className="cart" /><span className='cart-count'>{cart.length}</span></Link>
          <Link to={"Login"} className=""><img src="./Images/login-2.png" className="login" /></Link>

        </div>

        <div id="menu"><i className="fas fa-bars"></i></div>
      </header>
    </>
  )
}

export default Headaer