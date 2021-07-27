const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Todo extends Model {}
Todo.init(
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
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: false,

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
    modelName: "todo",
  }
);
module.exports = Todo;
