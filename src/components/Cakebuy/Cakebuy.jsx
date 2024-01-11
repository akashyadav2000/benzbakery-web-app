import { text } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Cakebuy.css'
import { useDispatch, useSelector } from 'react-redux'

function Cakebuy() {

  const items = useSelector(store => store.buyCakeItems)

  return (
    <>
      <main className="bg" id={items.id}>

        <img src={items.image} id="pro_details_img" height="500px" width="450px" className="product-d-photo"
          style={{ boxShadow: "0px 0px 5px 4px white", borderRadius: "10px", marginTop: "35px" }} />

        <main className="product-details">

          <p className="cake-name">{items.items}</p>
          <br />

          <p>{items.cakeD}</p>
          <br />

          <p className="cake-ingredients">Ingredient</p>
          <br />

          <p>{items.ingredient}</p>
          <br />

          <p className="rs"><FontAwesomeIcon icon={faIndianRupeeSign} /> {items.price}
          </p>

          <div className="cart-container">

            <button id="LinkButton2" className="cart-btn">Add to cart
              <FontAwesomeIcon className='angle-right' icon={faAngleRight} />
            </button>

          </div>

        </main>
      </main>

    </>
  )
}

export default Cakebuy