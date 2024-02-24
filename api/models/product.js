import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    inventory: {
      type: Number,
      required: true,
    },
    img: [
      {
        type: String,
      },
    ],
    baseprice: {
      type: Number,
      required: true,
    },
    wastageprice: {
      type: Number,
      required: true,
    },
    noOfReview: {
      type: Number,
      default: 1245,
    },
    rating: {
      type: Number,
      default: 4.2,
    },
    gold: {
      type: Number,
      required: true,
    },
    diamond: {
      type: Number,
      default: 0,
    },
    wastage: {
      type: Number,
      required: true,
    },
    beads: {
      type: Number,
      default: 0,
    },
    typ: {
      type: String,
      enum: ["bangle", "ring", "necklace", "earring", "chain", "braceletes"],
      required: true,
    },
    orders: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
