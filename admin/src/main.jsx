import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import User from "./components/User";
import Orders from "./components/Orders";
import AddProduct from "./components/AddProduct";
import Search from "./components/Search";
import EditProduct from "./components/EditProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/users",
        element: <User />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/editproduct",
        element: <EditProduct />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
