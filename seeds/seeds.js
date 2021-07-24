// const sequelize = require('../config/connection');
// const { User, Grocery, Todo, Group } = require('../models');

// const userData = require();
// const groupData = require();
// const groceryListData = require();
// const todoListData = require();

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   process.exit(0);
// };

// seedDatabase();

const seedUser = require('./user-seeds');
const seedGrocery = require('./grocery-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
  await sequelize.sync({force: true});

  await seedUser();
  await seedGrocery();

  process.exit(0);
}

seedAll()