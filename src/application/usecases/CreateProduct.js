import Product from "../../domain/entities/Product.js";

export default class CreateProduct {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(productData) {
    return await this.productRepository.create(productData);
  }
}