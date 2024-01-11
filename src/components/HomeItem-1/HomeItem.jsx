import { useDispatch } from 'react-redux';
// import './HomeItem.css'
import { cartActions } from '../Store/cartSlice';


const HomeItem = ({ item }) => {

  const dispatch = useDispatch()

  const handldeAddToCart = () => {
    dispatch(cartActions.addToCart(item.id))
  }


  return (

    <div className=" item-container">
      <img className="item-image" src={item.image} alt="item image" /> I
      <div className="rating">
        {item.rating.stars} ★ | {item.rating.count}
      </div>
      <div className="company-name">{item.company} </div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      <button
        className="btn-add-bag"
        onClick={handldeAddToCart}>
        Add to Bag
      </button>
    </div>
  );
};

export default HomeItem;