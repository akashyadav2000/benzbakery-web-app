import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { cartActions } from '../Store/cartSlice'

function Pastry({ pastryItem }) {

  const dispatch = useDispatch()

  const handldeAddToCart = () => {
    dispatch(cartActions.addToCart(pastryItem.id))
  }

  return (
    <>

      <div className="cake-col" id={pastryItem.id}>
        <img src={pastryItem.image} alt={pastryItem.alt_Name} />
        <div className="price">
          <Link to={"Cart"}
            onClick={handldeAddToCart}
            className="rupees">{pastryItem.item}<br />
            ₹ {pastryItem.price}</Link>
        </div>
      </div>

    </>
  )
}

export default Pastry