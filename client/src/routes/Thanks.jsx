import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Thanks = () => {
  const navigateTo = useNavigate();
  const handlehome = () => {
    navigateTo("/");
  };
  return (
    <>
      <Header />
      <div className="thanks">
        <h1 className="thanks-msg">
          Thank You for Hopping with us. You can view order deatils will be
          updated in order section{" "}
        </h1>
        <div className="thanks-button">
          <button className="thx-btn" onClick={handlehome}>
            Home
          </button>
          <button className="thx-btn">Order Status</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Thanks;
