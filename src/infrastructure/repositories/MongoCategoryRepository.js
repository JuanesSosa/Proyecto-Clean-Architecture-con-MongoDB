import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: String,
  description: String
});

const CategoryModel = mongoose.model("Category", categorySchema);

export default class MongoCategoryRepository {
  async create(categoryData) {
    const category = new CategoryModel(categoryData);
    return await category.save();
  }

  async getAll() {
    return await CategoryModel.find();
  }
}