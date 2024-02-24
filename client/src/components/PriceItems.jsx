import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PriceItems = ({ items }) => {
  const navigateTo = useNavigate();
  const handleClick = () => {
    navigateTo("/thanks");
  };
  const [sum, setSum] = useState(0);
  const [waste, setWaste] = useState(0);
  useEffect(() => {
    let total = 0;
    items.forEach((item) => {
      total += item.baseprice;
    });
    setSum(total);
    total = 0;
    items.forEach((item) => {
      total += item.wastageprice;
    });
    setWaste(total);
  }, [items]);

  return (
    <div className="total-bag">
      <h3 className="item-head">Price Details</h3>
      <div className="price-main">
        <div className="base">
          <span>Base Price</span>
          <span>Rs. {0.8*sum}</span>
        </div>
        <div className="base">
          <span>GST</span>
          <span>Rs. {0.2*sum}</span>
        </div>
        <div className="base">
          <span>Wastage</span>
          <span>Rs. {waste}</span>
        </div>
        <div className="discount">
          <span>Discount*</span>
          <span>Rs. 0</span>
        </div>
        <hr />
        <div className="total">
          <span>Total</span>
          <span>Rs. {sum+waste}</span>
        </div>
        <div className="button-div">
          <button className="place-order" onClick={handleClick}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceItems;
