import express from "express";
import { createProduct, deleteProduct, getProduct, getProducts, newProduct, searchProduct, trendProduct, updateProduct } from "../controllers/product.js";

const router = express.Router()

//create
router.post('/',createProduct);

//update
router.put('/:id',updateProduct);

//delete
router.delete("/:id", deleteProduct);

//get by id
router.get("/find/:id", getProduct);

//get all
router.get("/", getProducts);

//get new 
router.get("/new", newProduct);

//get trending
router.get("/trend", trendProduct);

//get search
router.get("/search", searchProduct);



export default router;