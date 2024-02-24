import React, { useEffect, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
const header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="admin-header">
      <div className="left-head">
        <img src="/asset/logo.png" alt="logo" className="logo-img" />
        <h2 className="header-name" style={{ scale: "1.2" }}>
          Jewelley Dashboard
          <h3 className="time"> {time.toLocaleTimeString()}</h3>
        </h2>
      </div>
      <div className="right-head">
        <IoIosNotifications size={"30px"} className="header-name" />
        <FaMessage size={"24px"} className="header-name" />
        <IoIosLogOut size={"30px"} className="header-name" />
      </div>
    </div>
  );
};

export default header;
