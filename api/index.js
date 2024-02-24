import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

import porductRoute from "./routes/products.js";

const app = express();
dotenv.config();

app.use(cors({ origin: true, credentials: true }));

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});

app.get("/", (req, res) => {
  res.send("hello 1st request");
});

//middlewares
app.use(cors());
app.use(cookieParser());

app.use(express.json());

app.use("/api/product", porductRoute);
// app.use("/api/users", usersRoute);
// app.use("/api/hotels", hotelsRoute);
// app.use("/api/rooms", roomsRoute);

app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Somthing went wrong";
  return res.status(errorStatus).json({
    sucess: false,
    status: errorStatus,
    message: errorMessage,
    stack: error.stack,
  });

  return res.status(errorStatus).json(errorMessage);
});

app.listen(8000, () => {
  connect();
  console.log("Connected to backend!");
});
