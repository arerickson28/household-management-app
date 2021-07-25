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
    {
        username: 'dvang31',
        password: 'yoyoyo',
        first_name: 'Derek',
        last_name: 'Vangstad'
    },
]

const seedUser = () => User.bulkCreate(seedData);

module.exports = seedUser