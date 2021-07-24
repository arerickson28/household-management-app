const { Grocery } = require("../models")

const seedData = [
    {
        product: 'Milk',
        quantity: 2,
        user_id: 1,
    },
    {
        product: 'Cheese',
        quantity: 4,
        user_id: 1,
    },
    {
        product: 'Bread',
        quantity: 10,
        user_id: 1,
    },
    {
        product: 'Strawberries',
        quantity: 5,
        user_id: 2,
    },
]

const seedGrocery = () => Grocery.bulkCreate(seedData);

module.exports = seedGrocery