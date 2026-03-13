import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  sku: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

export default mongoose.model("Product", ProductSchema);