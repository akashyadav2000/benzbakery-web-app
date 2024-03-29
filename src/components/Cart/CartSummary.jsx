import { useSelector } from "react-redux";
import './Cart.css'

const CartSummary = () => {
  const bagItemIds = useSelector((state) => state.cart);

  const categories = ["cakeItems", "pastryItems", "cupCakeItems", "weddingCakeItems"];

  const finalItems = categories.flatMap(category => {
    const items = useSelector((state) => state[category]);
    return items.filter(item => bagItemIds.includes(item.id));
  });

  const CONVENIENCE_FEES = 99;
  let totalItem = bagItemIds.length;
  let totalMRP = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.price;
  });

  let finalPayment = totalMRP + CONVENIENCE_FEES;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items)</div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>

        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value priceDetail-base-discount"
          >₹99</span
          >
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default CartSummary;
