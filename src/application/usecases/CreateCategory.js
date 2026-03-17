export default class CreateCategory {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async execute(categoryData) {
    return await this.categoryRepository.create(categoryData);
  }
}