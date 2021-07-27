const { Todo } = require("../models")

const seedData = [
    {
        task: 'Take Dog for walk',
        notes: 'Make sure he poops',
        user_id: 3

    },
]

const seedTodo = () => Todo.bulkCreate(seedData);

module.exports = seedTodo
