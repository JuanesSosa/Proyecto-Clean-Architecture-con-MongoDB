import MongoProductRepository from "../repositories/MongoProductRepository.js";

import CreateProduct from "../../application/usecases/CreateProduct.js";
import GetAllProducts from "../../application/usecases/GetAllProducts.js";

import ProductController from "../controllers/ProductController.js";


const repository = new MongoProductRepository();


const createProduct = new CreateProduct(repository);

const getAllProducts = new GetAllProducts(repository);


const productController = new ProductController({
  createProduct,
  getAllProducts
});


export { productController };