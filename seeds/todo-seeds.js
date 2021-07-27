const { Todo } = require("../models")

const seedData = [
    {
        user_id: 4,
        task: 'Pickup some CSS to pair with the HTML.',
    },
    {
        user_id: 4,
        task: 'Check the routes in the JS.',
    },
    {
        user_id: 4,
        task: 'Does every task need to be about computers?',
    },
]

const seedTodo = () => Todo.bulkCreate(seedData);

module.exports = seedTodo
