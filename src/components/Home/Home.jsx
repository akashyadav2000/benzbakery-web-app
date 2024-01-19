import React from 'react'
import PastryContainer from '../Pastry/PastryContainer'
import Display from '../Display/Display'
import WeddingCakeContainer from '../WeddingCake/WeddingCakeContainer'
import CakeContainer from '../Cake/CakeContainer'
import CupCakeContainer from '../CupCake/CupCakeContainer'
import { useSelector } from 'react-redux'
import Product from '../Product/Product'
// import HomeItem from '../HomeItem-1/HomeItem'

function Home() {

  // const items = useSelector(store => store.items)

  return (
    <>
      <Display />
      <Product />


      {/* 
      {items.map(cakeElement => <HomeItem key={cakeElement.id} item={cakeElement} />)} */}


      {/* <CakeContainer />
      <PastryContainer />
      <CupCakeContainer />
      <WeddingCakeContainer /> */}
    </>
  )
}

export default Home