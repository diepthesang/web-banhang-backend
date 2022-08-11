'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cart.init({
    productId: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    userId: DataTypes.STRING,
    orderId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};