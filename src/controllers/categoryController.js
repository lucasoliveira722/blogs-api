const categoryService = require('../services/categoryService');

const createCategory = async (req, res, next) => {
  const { name } = req.body;

  try {
    const newCategory = await categoryService.create({ name });
    return res.status(201).json(newCategory);
  } catch (err) {
    next(err);
  }
};

const findAllCategories = async (_req, res, next) => {
  try {
    const allCategories = await categoryService.findAll();
    return res.status(200).json(allCategories);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createCategory,
  findAllCategories,
};