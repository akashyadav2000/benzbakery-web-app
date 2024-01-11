import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { cartActions } from '../Store/cartSlice'

function CupCake({ cupCakeItem }) {

  const dispatch = useDispatch()

  const handldeAddToCart = () => {
    dispatch(cartActions.addToCart(cupCakeItem.id))
  }

  return (
    <>
      <div className="cake-col" id={cupCakeItem.id}>
        <img src={cupCakeItem.image} alt={cupCakeItem.alt_Name} />
        <div className="price">
          <Link to={"/benzbakery-web-app/Cart"}
            onClick={handldeAddToCart}
            className="rupees">{cupCakeItem.item}<br />
            ₹ {cupCakeItem.price}</Link>
        </div>
      </div>
    </>
  )
}

export default CupCake