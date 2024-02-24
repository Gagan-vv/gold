import Product from "../models/product.js";

export const createProduct = async (req, res, next) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted");
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const hotel = await Product.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

export const newProduct = async (req, res, next) => {
  try {
    const nproducts = await Product.find().sort({ createdAt: -1 }).limit(5);
    res.status(200).json(nproducts);
  } catch (err) {
    next(err);
  }
};

export const trendProduct = async (req, res, next) => {
  try {
    const trdproducts = await Product.find().sort({ orders: -1 }).limit(5);
    res.status(200).json(trdproducts);
  } catch (err) {
    next(err);
  }
};

export const searchProduct = async (req, res, next) => {
  try {
    const searchCriteria = { typ: req.query.typ };
    const srcproducts = await Product.find(searchCriteria)
    res.status(200).json(srcproducts);
  } catch (err) {
    next(err);
  }
};

