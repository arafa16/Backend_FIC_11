'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.user,{
        foreignKey: "customer_id",
        as: "user"
      });
    }
  }
  order.init({
    customer_id: DataTypes.INTEGER,
    order_date: DataTypes.DATE,
    shipping_address: DataTypes.TEXT,
    total: DataTypes.DECIMAL(10, 2)
  }, {
    sequelize,
    modelName: 'order',
    underscored: true,
  });
  return order;
};