const router = require("express").Router();
const { User, Grocery, Todo } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  console.log(req.session.user_id);
  try {
    const noteData = await Todo.findAll({
      where: {
        user_id: req.session.user_id,
      },
      order: [
        ['id', 'DESC'],
      ],
    });

    const notes = noteData.map((note) => note.get({ plain: true }));
    //console.log(notes);

    res.render("notepage", {
      notes: notes,
      logged_in: true,
      user_id: req.session.user_id
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/post", async (req, res) => {
  try {
    const noteData = await Todo.create(req.body);

    req.session.save(() => {
      res.status(200).json(noteData);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
