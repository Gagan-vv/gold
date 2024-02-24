import React, { useEffect, useState } from "react";
import SingleItem from "./SingleItem";
import axios from "axios";

const Item = () => {
  const [items, setItems] = useState([]);
  const [itemsTrend, setItemsTrend] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/product/new"
        );
        const responseT = await axios.get(
          "http://localhost:8000/api/product/trend"
        );
        setItems(response.data);
        setItemsTrend(responseT.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, []);
  

  return (
    <div className="items">
      <h3 className="heading-text">New Items</h3>
      {items.map((item, index) => (
        <SingleItem key={index} item={item} isNew={1}/>
      ))}
      <h3 className="heading-text">Trending Items</h3>
      {itemsTrend.map((item, index) => (
        <SingleItem key={item} item={item} isTrend={1}/>
      ))}
      <h3 className="heading-text">Shop by category</h3>
      <div className="categoryy"><p className="cat-title">Bangle</p></div>
      <div className="categoryy">hello</div>
      <div className="categoryy">hello</div>
    </div>
  );
};

export default Item;
