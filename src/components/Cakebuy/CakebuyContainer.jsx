import React from 'react'
import Cakebuy from './Cakebuy'
import { useSelector } from 'react-redux'

function CakebuyContainer() {

  const items = useSelector(store => store.buyCakeItems)
  return (
    <>

      {items.map(buyCakeElement => <Cakebuy key={buyCakeElement.id} buyCakeItem={buyCakeElement} />)}

    </>
  )
}

export default CakebuyContainer