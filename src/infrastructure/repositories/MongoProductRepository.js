import ProductRepository from "../../domain/repositories/ProductRepository.js";
import ProductModel from "../database/ProductModel.js";

export default class MongoProductRepository extends ProductRepository {

  async save(product) {

    const newProduct = new ProductModel(product);

    return await newProduct.save();

  }

  async findAll() {

    return await ProductModel.find();

  }

}