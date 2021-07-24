const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Group extends Model { }

Group.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    group_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [3],
      },
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "group",
  }
);

module.exports = Group;
