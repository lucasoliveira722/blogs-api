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

module.exports = {
  createCategory,
};