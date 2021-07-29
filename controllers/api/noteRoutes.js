const router = require("express").Router();
const { User, Grocery, Todo } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  console.log(req.session.user_id);
  //console.log(req.body);
  try {
    const noteData = await Todo.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: {
            exclude: ["password"],
          },
        },
      ],
    });

    const notes = noteData.map((note) => note.get({ plain: true }));
    console.log(notes);

    res.render("notepage", {
      notes: notes,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/post", async (req, res) => {
  console.log(req.body);
  try {
    const noteData = await Todo.create(req.body);

    req.session.save(() => {
      //req.session.user_id = noteData.id;
      //req.session.logged_in = true;

      res.status(200).json(noteData);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
