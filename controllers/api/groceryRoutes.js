const router = require('express').Router();
const { User, Grocery, Todo } = require('../../models');

router.post('/post', async (req, res) => {
    console.log(req.body);
  try {
    const groceryData = await Grocery.create(req.body);

    req.session.save(() => {
      //req.session.user_id = groceryData.id;
      //req.session.logged_in = true;

      res.status(200).json(groceryData);
    });
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

module.exports = router;