'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init({
    uuid: DataTypes.STRING,
    name: DataTypes.STRING,
    productImage: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    statusId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    discountedPrice: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};