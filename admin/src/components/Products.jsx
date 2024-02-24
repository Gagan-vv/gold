import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const Products = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/product");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="dash">
      <h1 className="p-head">Products</h1>
      <hr />
      <div className="product">
        <p className="titlee">Title</p>
        <p className="tq">Total Quantity</p>
        <p className="nor">No of Order</p>
        <p className="amount">Total Amount</p>
        <p>Actions</p>
      </div>

      {items.map((item, ind) => (
        <>
          <div className="product-det">
            {ind + 1}
            <p className="titlee">{item.title}</p>
            <p className="tq">{item.inventory}</p>
            <p className="nor">{item.orders}</p>
            <p className="amount">{item.baseprice+item.wastageprice}</p>
            <p><MdDelete size={"26px"}/> &nbsp;&nbsp;&nbsp; <MdEdit size={"26px"}/></p>
          </div>
          {ind < items.length - 1 && <hr />}
        </>
      ))}
    </div>
  );
};

export default Products;
