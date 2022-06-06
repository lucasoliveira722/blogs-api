const postService = require('../services/postService');
// const { User } = require('../database/models');

const findAllPost = async (_req, res, next) => {
  try {
    const allCategories = await postService.findAllPost();
    return res.status(200).json(allCategories);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findAllPost,
};