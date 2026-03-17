import Product from "../../domain/entities/Product.js";

export default class CreateProduct {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

 async execute(productData) {
  const product = new Product(productData);
  return await this.productRepository.save(product);
}

}