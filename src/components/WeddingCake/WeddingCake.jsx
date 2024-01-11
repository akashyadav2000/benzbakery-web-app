import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { cartActions } from '../Store/cartSlice'

function WeddingCake({ weddingCakeItem }) {

  const dispatch = useDispatch()

  const handldeAddToCart = () => {
    dispatch(cartActions.addToCart(weddingCakeItem.id))
  }

  return (
    <>

      <div className="cake-coll" id={weddingCakeItem.id}>
        <img src={weddingCakeItem.image} alt={weddingCakeItem.alt_Name} />
        <div className="price">
          <Link to={"Cart"}
            onClick={handldeAddToCart}
            className="rupees">{weddingCakeItem.item}<br />
            ₹ {weddingCakeItem.price}</Link>
        </div>
      </div>
    </>
  )
}

export default WeddingCake