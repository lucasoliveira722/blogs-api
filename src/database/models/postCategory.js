module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  },
  { timestamps: false });

  PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'BlogPosts',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    Category.belongsToMany(BlogPost, {
      as: 'Categories',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId'
    })
  }

  return PostCategory;
};