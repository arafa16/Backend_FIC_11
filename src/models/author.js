'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      author.belongsToMany(models.book, {
        through: models.book_author,
        foreignKey: "author_id",
        as: "books",
      });
    }
  }
  author.init({
    name: DataTypes.STRING,
    biography: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'author',
    underscored: true,
  });
  return author;
};