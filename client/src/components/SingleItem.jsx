import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineTrendingUp } from "react-icons/md";

const SingleItem = ({ item, isNew, isTrend }) => {
  const dataToSend = item;
  const isNews = isNew | null;
  const isTrends = isTrend | null;
  return (
    <Link
      to={`/product/${item._id}`}
      state={{ data: item._id }}
      className="item-single"
    >
        {isNew ? <span className="notify-badge">NEW</span> : null}
        {isTrends ? (
          <span className="treding">
            <MdOutlineTrendingUp style={{ marginRight: "5px" }} /> Trending
          </span>
        ) : null}
        <img src={item.img[0]} alt={item.title} />
        <div className="title">{item.title}</div>
        <div className="extra">
          <p>Rs. {item.baseprice + item.wastageprice}</p>
          <p>
            {item.rating} ⭐ ({item.noOfReview}){" "}
          </p>
        </div>
    </Link>
  );
};

export default SingleItem;
