import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SingleItem from "../components/SingleItem";
import { useState } from "react";
import axios from "axios";

const Category = () => {
  const location = useLocation();
  const loc = location.pathname;
  const category = loc.split("/").pop();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/product/search?typ=${category}`
        );
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, [location.pathname]);


  const scale = 0.4;
  return (
    <>
      <Header />
      <div className="search-pg">
        <div className="search-filter">
          <h4 className="srch-title">Search Filter</h4>
          <h5 className="subtitle">Sort:</h5>
          <div className="sort-input">
            <input
              type="radio"
              checked="checked"
              name="radio"
              className="radio"
            />
            Price low to high
          </div>
          <div className="container">
            <input type="radio" name="radio" className="radio" />
            Price high to low
          </div>
          <h5 className="subtitle">Filter by price:</h5>
        </div>
        <div className="search-result">
          {items.length !== 0 ? (
            <>
              <h4 className="srch-title">Search Result for {category}</h4>
              {items.map((item, index) => (
                <SingleItem
                  key={index}
                  item={item}
                  style={{ transform: `scale(${scale})` }}
                />
              ))}{" "}
            </>
          ) : 
          <>
          <div className="notfound">Product {category} not found. </div></>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Category;
