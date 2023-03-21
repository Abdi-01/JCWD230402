'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productAtWarehouse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  productAtWarehouse.init({
    stock: DataTypes.INTEGER,
    booked: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    warehouseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'productAtWarehouse',
  });
  return productAtWarehouse;
};