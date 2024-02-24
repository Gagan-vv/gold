import React, { useEffect, useState } from "react";

import BagItem from "./BagItem";
import PriceItems from "./PriceItems";

const BagMain = () => {
  const [data, setData] = useState([]);
  const [basePrice, setBasePrice] = useState(0);
  let bp = 0;
  const existBag = localStorage.getItem("mybag") || null;
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
        setBasePrice(bp);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="bag-main">
      {bagData.length > 0 ? (
        <>
          <div className="item-bag">
            <h3 className="item-head">Cart Details</h3>
            {data.map((item, index) => (
              <BagItem key={index} items={item} />
            ))}
          </div>
          <PriceItems items={data} />
        </>
      ) : (
        <div className="empty-bag">Bag is Empty</div>
      )}
    </div>
  );
};

export default BagMain;
