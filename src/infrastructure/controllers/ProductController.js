export default class ProductController 
{

  constructor({ createProduct, getAllProducts }) 
  {
    this.createProduct = createProduct;
    this.getAllProducts = getAllProducts;
  }

  async create(req, res) 
  {
    try 
    {
      const product = await this.createProduct.execute(req.body);
      
      res.status(201).json(product);
    } catch (err) 
    {
      res.status(400).json({ error: err.message });

    }

  }

  async getAll(req, res) 
  {
    try
     {
      const products = await this.getAllProducts.execute();

      res.status(200).json(products);
    } catch (err) 
    {
      res.status(500).json({ error: err.message });

    }

  }

}