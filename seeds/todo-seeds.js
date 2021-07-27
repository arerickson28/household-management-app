const { Todo } = require("../models")

const seedData = [
    {
        user_id: 4,
        task: 'CSS to HTML',
        notes: 'Pickup some CSS to pair with the HTML.',
    },
    {
        user_id: 4,
        task: 'JS Stuff',
        notes: 'Check the routes in the JS.',
    },
    {
        user_id: 4,
        task: 'Computers',
        notes: 'Does every task need to be about computers?',
    },
    {
        user_id: 3,
        task: 'Take Dog for walk',
        notes: 'Make sure he poops',
    },
]

const seedTodo = () => Todo.bulkCreate(seedData);

module.exports = seedTodo
