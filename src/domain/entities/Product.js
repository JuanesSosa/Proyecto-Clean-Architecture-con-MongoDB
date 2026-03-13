export default class Product {
  constructor({ sku, price }) {
    this.sku = sku;
    this.price = Number(price);
  }
}