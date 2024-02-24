import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [selectedValue, setSelectedValue] = useState("");
  const [alert, setAlert] = useState("");

  const notify = (val) => toast.success(val);
  const notifye = () => toast.error("An Error has occured");

  const handleChange = (e) => {
    // console.log(e.target.value);
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    // console.log("1",value);
  };
  // console.log("2",selectedValue)
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/sharpecstasy/image/upload",
            data
          );
          const { url } = uploadRes.data;
          return url;
        })
      );
      const newproduct = {
        ...info,
        img: list,
      };
      await axios.post("http://localhost:8000/api/product/", newproduct);
      console.log(newproduct);
      notify("Product Added");
    } catch (err) {
      notifye();
      console.log(err);
    }
  };

  return (
    <div className="add-product">
      <h1 className="p-head">Add product</h1>
      <hr />
      <form className="info" onChange={handleChange}>
        <div className="basic-detail">
          <span className="sub-title">Basic Details</span>
          <hr />
          <div className="detail">
            <span className="title-deatail">Title</span>
            <input
              type="text"
              placeholder="Add Title"
              className="input"
              id="title"  
              defaultValue="jhn"
            />
          </div>
          <div className="detail">
            <span className="title-deatail">Description</span>
            <textarea
              type="text"
              placeholder="Add Description.."
              className="input"
              cols="40"
              rows="6"
              id="desc"
            />
          </div>
          <div className="detail">
            <span className="title-deatail">Inventory</span>
            <input
              type="text"
              placeholder="Add Stock"
              className="input"
              id="inventory"
            />
          </div>
          <div className="imageee">
            <span className="title-deatail">Choose Image</span>
            <input
              type="file"
              placeholder="Add Stock"
              className="file"
              id="img"
              multiple
              onChange={(e) => setFiles(e.target.files)}
            />
          </div>
          <button className="add" onClick={handleClick}>
            ADD PRODUCT
          </button>
        </div>

        <div className="quantity1">
          <span className="sub-title">Quantity and Price</span> <hr />
          <div className="detail">
            <span className="title-deatail">Base Price</span>
            <input
              type="text"
              placeholder="Add Base Price"
              className="input"
              id="baseprice"
            />
          </div>
          <div className="detail">
            <span className="title-deatail">Wastage Price</span>
            <input
              type="text"
              placeholder="Add Wastage Price.."
              className="input"
              id="wastageprice"
            />
          </div>
          <div className="detail">
            <span className="title-deatail">Gold Quantity</span>
            <input
              type="text"
              placeholder="Add data"
              className="input"
              id="gold"
            />
          </div>
          <div className="detail">
            <span className="title-deatail">Diamond Quantity*</span>
            <input
              type="text"
              placeholder="Add data"
              className="input"
              id="diamond"
            />
          </div>
          <div className="detail">
            <span className="title-deatail">Beads Quantity*</span>
            <input
              type="text"
              placeholder="Add data"
              className="input"
              id="beads"
            />
          </div>
          <div className="detail">
            <span className="title-deatail">Wastage Quantity</span>
            <input
              type="text"
              placeholder="Add data"
              className="input"
              id="wastage"
            />
          </div>
          <div className="detail">
            <label for="type" className="title-deatail">
              Product Type:
            </label>
            <select
              name="type"
              id="typ"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="">---</option>
              <option value="bangle">Bangle</option>
              <option value="ring">Ring</option>
              <option value="necklace">Necklace</option>
              <option value="earring">Earring</option>
              <option value="chain">Chain</option>
              <option value="braceletes">Braceletes</option>
            </select>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
