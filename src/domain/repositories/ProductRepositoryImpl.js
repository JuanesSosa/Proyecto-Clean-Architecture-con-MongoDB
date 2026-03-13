import ProductRepository from "../../domain/repositories/ProductRepository.js";

export default class ProductRepositoryImpl extends ProductRepository {

  constructor() {
    super();
    this.products = [];
  }

  async save(product) {
    this.products.push(product);
    return product;
  }

  async findAll() {
    return this.products;
  }

}