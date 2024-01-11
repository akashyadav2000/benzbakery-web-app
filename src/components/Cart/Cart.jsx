import React from 'react'
import CartSummary from './CartSummary'
import CartItem from './CartItem'
// import '../HomeItem-1/HomeItem.css'
import { useSelector } from 'react-redux';

function Cart() {

  const bagItems = useSelector((state) => state.cart);
  const categories = ["items", "cakeItems", "pastryItems", "cupCakeItems", "weddingCakeItems"];

  const finalItems = categories.flatMap(category => {
    const items = useSelector((state) => state[category]);
    return items.filter(item => bagItems.includes(item.id));
  });


  // const bagItems = useSelector((state) => state.cart);
  // const items = useSelector((state) => state.items);
  // const cakeItems = useSelector((state) => state.cakeItems);
  // const pastryItems = useSelector((state) => state.pastryItems);
  // const cupCakeItems = useSelector((state) => state.cupCakeItems);
  // const weddingCakeItems = useSelector((state) => state.weddingCakeItems)


  // const filterItems = (items) => {
  //   return items.filter((item) => {
  //     const itemIndex = bagItems.indexOf(item.id);
  //     return itemIndex >= 0;
  //   });
  // };

  // const finalItems = [
  //   ...filterItems(items),
  //   ...filterItems(cakeItems),
  //   ...filterItems(pastryItems),
  //   ...filterItems(cupCakeItems),
  //   ...filterItems(weddingCakeItems),
  // ];



  // const bagItems = useSelector((state) => state.cart);
  // const items = useSelector((state) => state.items);
  // const finalItems = items.filter((item) => {
  //   const itemIndex = bagItems.indexOf(item.id);
  //   return itemIndex >= 0;
  // });



  return (
    <main className="bg">
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <CartSummary />
      </div>
    </main>
  )
}

export default Cart