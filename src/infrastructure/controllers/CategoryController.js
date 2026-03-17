export default class CategoryController 
{
  constructor({ createCategory, getAllCategories }) 
  {
    this.createCategory = createCategory;
    this.getAllCategories = getAllCategories;
  }

  create = async (req, res) => 
    {
    const result = await this.createCategory.execute(req.body);
    res.json(result);
  };

  getAll = async (req, res) => 
    {
    const result = await this.getAllCategories.execute();
    res.json(result);
  };
}