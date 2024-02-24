import React from "react";
import { MdDeleteOutline } from "react-icons/md";
const BagItem = ({ items, val }) => {
  const existBag = localStorage.getItem("mybag") || null;
  let bagData = [];
  if (existBag) {
    bagData = JSON.parse(existBag);
    if (!Array.isArray(bagData)) {
      bagData = [bagData];
    }
  }

  const existWish = localStorage.getItem("mywish") || null;
  let bagWish = [];   
  if (existWish) {
    bagWish = JSON.parse(existWish);
    if (!Array.isArray(bagWish)) {
      bagWish = [bagWish];
    }
  }
  console.log(existWish)
  const handleClick = () => {
    if (val) {
      console.log(items._id);
      const newArray = bagWish.filter((item) => item.id !== items._id);
      bagWish = newArray;
      localStorage.setItem("mywish", JSON.stringify(bagWish));
      location.reload();
    } else {
      console.log(items._id);
      const newArray = bagData.filter((item) => item.id !== items._id);
      bagData = newArray;
      console.log(bagData);
      localStorage.setItem("mybag", JSON.stringify(bagData));
      location.reload();
    }
  };

  return (
    <div className="product-single">
      <div className="detail-bag">
        <span className="title-bag">{items.title}</span>
        <span className="price-bag">
          Rs {items.baseprice + items.wastageprice}
        </span>
        <span className="quantity">
          <div className="quantity buttons_added">
            <div className="qt-bag">Quantity: </div>
            <input type="button" value="-" className="minus" />
            <input
              type="number"
              step="1"
              min="1"
              max=""
              name="quantity"
              value="1"
              title="Qty"
              className="input-text qty text"
              size="4"
              pattern=""
              inputMode=""
            />
            <input type="button" value="+" className="plus" />
            {val ? (
              <button className="move-to">Move to Cart</button>
            ) : (
              <button className="move-to">Move to WishList</button>
            )}
          </div>
        </span>
      </div>
      <img src={items.img[0]} alt="" className="image-bag" />
      <button className="delete-bag" onClick={handleClick}>
        <MdDeleteOutline
          size="30px"
          style={{
            position: "relative",
            margin: "10px",
            bottom: "10px",
            left: "10px",
          }}
        />
      </button>
    </div>
  );
};

export default BagItem;
