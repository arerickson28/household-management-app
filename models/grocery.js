const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Grocery extends Model {}
Grocery.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // group_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "group",
    //     key: "id",
    //   },
    // },
    product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "grocery",
  }
);
module.exports = Grocery;
