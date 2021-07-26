const User = require("./user");
const Group = require("./Group");
const Grocery = require("./grocery");
const Todo = require("./todo");

User.hasMany(Grocery, Todo, {
    foreignKey: 'user_id'
})

Grocery.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Todo.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

module.exports = { User, Grocery, Todo };
