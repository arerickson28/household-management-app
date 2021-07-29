const router = require("express").Router();
const { Grocery } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  console.log(req.session.user_id);
  //console.log(req.body);
  try {
    const groceryData = await Grocery.findAll({
      where: {
        user_id: req.session.user_id,
      },
      order: [
        ['id', 'DESC'],
      ],
    });

    const groceries = groceryData.map((groceries) => groceries.get({ plain: true }));
    console.log(groceries);

    res.render("grocery", {
      groceries: groceries,
      logged_in: true,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/post", async (req, res) => {
  console.log(req.body);
  try {
    const groceryData = await Grocery.create(req.body);

    req.session.save(() => {
      res.status(200).json(groceryData);
    });

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  console.log(req.params);
  try {
    const groceryData = await Grocery.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    }); 

    if (!groceryData) {
      res.status(404).json({ message: 'No grocery product found with this id!' });
      return;
    }

    res.status(200).json(groceryData);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
