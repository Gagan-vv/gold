import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [isdata, setIsData] = useState(false);
  const [items, setItems] = useState([]);
  const [imageLocation, setImageLocation] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [image, setImage] = useState("");

  const handleImageClick = (index) => {
    setImageLocation(index);
  };
  const handleClick = () => {
    setIsData(true);
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/product/find/${inputValue}`
        );
        setItems(response.data);
        console.log(items);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update inputValue state with the new value from the input
  };

  console.log(items);
  return (
    <div className="dash">
      <h1 className="p-head">Search</h1>
      <hr />
      {!isdata && (
        <>
          <div className="search-hello">What to Search Today..........</div>
          <div className="searchhh">
            Enter Product ID
            <input
              type="text"
              placeholder="Enter Id"
              className="input-srch"
              onChange={handleInputChange}
            />
            <button onClick={handleClick} className="search-btn">
              Search
            </button>
          </div>
        </>
      )}
      {isdata && (
        <div className="product-detail">
          <div className="product-image">
            {/* {items.img} */}

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
          </div>
          <div className="product-desc">
            <span className="id-pdt">Product ID: {items._id}</span>
            <span className="title-pdt">{items.title}</span>
            <span className="desc">
              {items.desc}
            </span>
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
      )}
    </div>
  );
};

export default Search;
