import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const existBag = localStorage.getItem("mybag") || null;
  let bagData = [];
  if (existBag) {
    bagData = JSON.parse(existBag);
    if (!Array.isArray(bagData)) {
      bagData = [bagData];
    }
  }

  // console.log(bagData.length);

  const islogin = true;
  return (
    <>
      <div className="alert">Optimised only for laptop screen</div>
      <div className="header-main">
        <a href="/" className="imgg">
          <img className="imgg" src={"/asset/logo.png"} alt="logo" />
        </a>
        <div className="right-item">
          <ul>
            <p className="input-1" onChange={(e) => handleChange(e)}>
              <Link to={`/category/${search}`}>
                <IoSearch
                  className="search-icon"
                  size="26px"
                  style={{ position: "relative", top: "4px" }}
                />
              </Link>
              <input
                type="search"
                placeholder="Search.."
                className="search"
                size="40px"
                style={{ position: "relative", bottom: "4px" }}
              />
            </p>
            <li>
              <Link to={`/category/bangle`}>Bangles</Link>
            </li>
            <li>
              <Link to={`/category/ring`} state={{ data: "ring" }}>
                Rings
              </Link>
            </li>
            <li>
              <Link to={`/category/necklace`} state={{ data: "necklace" }}>
                Necklace
              </Link>
            </li>

            <li>
              <a href="">
                <span className="phone-icon">
                  <FaPhone
                    size="25px"
                    style={{ position: "relative", top: "3px" }}
                  />
                </span>
              </a>
            </li>
            <li>
              <div>
                <a href="/wish">
                  <FaRegHeart
                    size="26px"
                    style={{ position: "relative", top: "4px" }}
                  />
                </a>
              </div>
            </li>
            <li>
              <div>
                <a href="/bag">
                  <IoBagHandleOutline
                    size="26px"
                    style={{ position: "relative", top: "2px" }}
                  />
                  <span className="notify-badge-head">{bagData.length}</span>
                </a>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <button className="dropbtn">
                  <CgProfile
                    size="26px"
                    style={{ position: "relative", top: "4px" }}
                  />
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  {!islogin && <a href="">Login</a>}
                  {islogin && <a href="">Profile</a>}
                  {islogin && <a href="">My Orders</a>}
                  {islogin && <a href="">Logout</a>}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
