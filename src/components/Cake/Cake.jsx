import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { cartActions } from '../Store/cartSlice'

function Cake({ cakeItem }) {

  const dispatch = useDispatch();

  const handldeAddToCart = () => {
    dispatch(cartActions.addToCart(cakeItem.id))
  }


  // const cartItems = useSelector(store => store.cart);
  // const elementFound = cakeItem.index0f(item.id) >= 0;

  return (
    <>

      <div className="cake-col" id={cakeItem.id}>
        <img src={cakeItem.image} alt={cakeItem.alt_Name} />
        <div className="price">
          <Link to={"/benzbakery-web-app/Cart"}
            onClick={handldeAddToCart}
            className="rupees">{cakeItem.item}<br />
            ₹ {cakeItem.price}</Link>
        </div>
      </div>
    </>
  )
}

export default Cake
