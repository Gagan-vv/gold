import React, { useEffect, useState } from "react";
import BagItem from "./BagItem";

const WishComponenet = () => {
  const [data, setData] = useState([]);

  const existBag = localStorage.getItem("mywish") || null;
  let bagData = [];
  if (existBag) {
    bagData = JSON.parse(existBag);
    if (!Array.isArray(bagData)) {
      bagData = [bagData];
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const promises = bagData.map(async (id, index) => {
        const response = await fetch(
          `http://localhost:8000/api/product/find/${id.id}`
        );
        const result = await response.json();
        return result;
      });

      try {
        const fetchedData = await Promise.all(promises);
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const vals = 1;
  return data.length === 0 ? (
    <div className="wish-cmp">
      <h2>Wishlist is Empty. Nothing to view here</h2>
    </div>
  ) : (
    <div className="wish-data">
      <span className="wishh">WishList</span>
      <span className="wish-item">
        {data.map((item, index) => {
          if (index % 2 === 0) {
            return <BagItem key={index} items={item} val={vals} />;
          }
        })}
      </span>
      <span className="wish-item">
        {data.map((item, ind) => {
          if (ind % 2 !== 0) {
            return <BagItem key={ind} items={item} val={vals} />;
          }
        })}
      </span>
    </div>
  );
};

export default WishComponenet;
