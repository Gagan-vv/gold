import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import App from "./routes/App.jsx";
import "./index.css";
import Bag from "./routes/Bag.jsx";
import Thanks from "./routes/Thanks.jsx";
import ItemPage from "./routes/ItemPage.jsx";
import WishList from "./routes/WishList.jsx";
import Login from "./routes/Login.jsx";
import Category from "./routes/Category.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/bag" element={<Bag/>}/>
        <Route path="/thanks" element={<Thanks/>}/>
        <Route path="/product/:id" element={<ItemPage/>}/>
        <Route path="/wish" element={<WishList/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/category/:cat" element={<Category  />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
