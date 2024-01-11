import React from 'react'
import { useSelector } from 'react-redux'
import CupCake from './CupCake'

function CupCakeContainer() {
  const items = useSelector(store => store.cupCakeItems)
  return (
    <>

      <div className="" id="cup-cakes">
        <span className="white"></span>
        <section className="product-3-cup-cakes" id="product-3-cup-cakes">
          <h1 className="title">Our Most Popular <span>Cup Cakes</span></h1>
          <div className="cake-row" id="main_cup_cake">


            {items.map(cupCakeElement => <CupCake key={cupCakeElement.id} cupCakeItem={cupCakeElement} />)}


          </div>
        </section >
      </div >

    </>
  )
}

export default CupCakeContainer