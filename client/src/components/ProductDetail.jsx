import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SingleItem from "./SingleItem";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({ item }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  const notifye = () => toast.error("Product Alreay Exist in cart");
  const notifyew = () => toast.error("Product Alreay Exist in wishlist");
  const notify = () => toast.success(`Product has been Added to cart`);
  const notifyw = () => toast.success(`Product added to wishlist`);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/product/find/${item}`
        );
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, []);

  const handlewish = () => {
    const existBag = localStorage.getItem("mywish") || null;
    console.log(existBag);
    let bagData = [];
    if (existBag) {
      bagData = JSON.parse(existBag);
      if (!Array.isArray(bagData)) {
        bagData = [bagData];
      }
    }
    const isUnique = bagData.every((existingItem) => existingItem.id !== item);
    if (isUnique) {
      bagData.push({ id: item });
      const updatedBagData = JSON.stringify(bagData);
      localStorage.setItem("mywish", updatedBagData);
      console.log("Item added to the wishlist:", item);
      notifyw();
    } else {
      console.log("Item is already in the wishlist:", item);
      notifyew();
    }
  };
  let [imageLocation, setImageLocation] = useState(0);

  const handleImageClick = (index) => {
    setImageLocation(index);
  };

  const handleBag = () => {
    const existBag = localStorage.getItem("mybag") || null;
    console.log(existBag);
    let bagData = [];
    if (existBag) {
      bagData = JSON.parse(existBag);
      if (!Array.isArray(bagData)) {
        bagData = [bagData];
      }
    }
    const isUnique = bagData.every((existingItem) => existingItem.id !== item);
    if (isUnique) {
      bagData.push({ id: item });
      const updatedBagData = JSON.stringify(bagData);
      localStorage.setItem("mybag", updatedBagData);
      console.log("Item added to the bag:", item);
      notify();
    } else {
      console.log("Item is already in the bag:", item);
      notifye();
    }
  };

  // console.log(items);
  return (
    <>
      <div className="product-detail">
        <div className="product-image">
          {items.img ? (
            <>
              <img
                src={items.img[imageLocation]}
                alt="image"
                className="img-prt"
              />
              <span className="slide-img">
                {items.img.map((item, ind) => (
                  <img
                    src={item}
                    alt={ind}
                    className="sl-img"
                    onClick={() => handleImageClick(ind)}
                    key={ind}
                  />
                ))}
              </span>
            </>
          ) : null}
          <button className="wish" onClick={handlewish}>
            Add to Wishlist
          </button>
          <button className="cart" onClick={handleBag}>
            Add to Bag
          </button>
        </div>
        <div className="product-desc">
          <span className="id-pdt">Product ID: {items._id}</span>
          <span className="title-pdt">{items.title}</span>
          <span className="desc">{items.desc}</span>
          <div className="data-qt">
            <div className="qt-data" style={{ paddingRight: "40px" }}>
              <h3>Quantity</h3>
              <div className="data-detail">
                <p>Gold</p>
                <p>{items.gold} gram</p>
              </div>
              <div className="data-detail">
                <p>Diamond</p>
                <p>{items.diamond} gram</p>
              </div>
              <div className="data-detail">
                <p>Wastage</p>
                <p>{items.wastage} gram</p>
              </div>
              <div className="data-detail">
                <p>Beads</p>
                <p>{items.beads} gram</p>
              </div>
            </div>
            <div className="qt-data">
              <h3>Price</h3>
              <div className="base-prc-detail">
                <p>Base Price (with tax)</p>
                <p>Rs {items.baseprice}</p>
              </div>
              <div className="wst-detail">
                <p>Wastage Price</p>
                <p>Rs {items.wastageprice}</p>
              </div>
              <hr />
              <div className="final-prc">
                <p>Final Price</p>
                <p>Rs {items.wastageprice + items.baseprice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="similar-product">
        <span className="title-similar">Similar Products........</span>
        {newItem.map(
          (item, index) => index < 5 && <SingleItem key={item.title} item={item} />
        )}
      </div> */}
      <ToastContainer />
    </>
  );
};

export default ProductDetail;
