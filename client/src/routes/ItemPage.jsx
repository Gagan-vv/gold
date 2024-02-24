import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail";

const ItemPage = () => {
  const location = useLocation();
  const item = location.state.data;

  return (
    <>
      <Header />
      <ProductDetail item={item} />
      <Footer />
    </>
  );
};

export default ItemPage;
