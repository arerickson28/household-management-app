const { User } = require("../models")

const seedData = [
    {
        username: 'jasonxbikexgang',
        password: 'ilikecherries',
        first_name: 'Jason',
        last_name: 'Bason'
    },
    {
        username: 'elisaxknifeworks',
        password: 'drowssap',
        first_name: 'Elisa',
        last_name: 'Knife'
    },
]

const seedUser = () => User.bulkCreate(seedData);

module.exports = seedUser