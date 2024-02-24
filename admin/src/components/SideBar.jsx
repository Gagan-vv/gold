import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { IoBag } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { MdOutlinePostAdd } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";

const sideBar = () => {
  const {pathname}=useLocation();
  const [index, setIndex] = useState(0);

  const handleClick = (number) => {
    setIndex(number);
  };

  const item = [
    {
      path: "/",
      title: "Dashboard",
      icon: MdDashboard,
    },
    {
      path: "/products",
      title: "Products",
      icon: MdProductionQuantityLimits,
    },
    {
      path: "/addproduct",
      title: "Add Product",
      icon: MdOutlinePostAdd,
    },
    {
      path: "/editproduct",
      title: "Edit Product",
      icon: FiEdit2,
    },
    {
      path: "/users",
      title: "Users",
      icon: HiUsers,
    },
    {
      path: "/orders",
      title: "Orders",
      icon: IoBag,
    },
    {
      path: "/search",
      title: "Search",
      icon: FaSearch,
    },
  ];
  return (
    <div className="side-bar">
      {item.map((item, ind) => (
        <Link
          to={item.path}
          className="span-admin"
          style={pathname === item.path ? {   backgroundColor: "bisque" } : null}
          onClick={() => handleClick(ind)}
        >
          < item.icon size={"25px"} />
          <h4 className="side-name">{item.title}</h4>
        </Link>
      ))}
    </div>
  );
};

export default sideBar;
