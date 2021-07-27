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
    {
        username: 'Jeff',
        password: '$2b$10$5tetAeXIqcOENApnDDwGhO5DjewV.lZ4q2.aT9vjCbprzo6GhMwPC',
        first_name: 'Jeff',
        last_name: 'Severson'
    },
]

const seedUser = () => User.bulkCreate(seedData);

module.exports = seedUser