const { Todo } = require("../models")

const seedData = [
    {

    }
]

const seedTodo = () => Todo.bulkCreate(seedData);

module.exports = seedTodo
