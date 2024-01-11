import React from 'react'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Cakebuy.css'
import { useDispatch } from 'react-redux';
import { cartActions } from "../Store/cartSlice";

function BagItem({ item }) {

  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(cartActions.removeFromCart(item.id));
  };

  return (
    <>

      <div className="bag-item-container">
        <div className="item-left-part">
          <img className="bag-item-img" src={item.image} />
        </div>
        <div className="item-right-part">
          <div className="cakename-ingredient">{item.item}</div>
          <span className="cakename-ingredient-details">
            {item.cakeD}
          </span>

          <div className="cakename-ingredient">Ingredient</div>
          <span className="cakename-ingredient-details">
            {item.ingredient}</span>

          <div className="price-cart">
            ₹
            <span className="price-details"> {item.price}</span>
          </div>
        </div>

        <div className="remove-from-cart" onClick={handleRemoveItem}>

        </div>
      </div>
    </>
  )
}

export default BagItem


