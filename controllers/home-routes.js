const router = require("express").Router();
const sequelize = require("../config/connection");
const { Pet, User } = require("../models");

// get all posts for homepage
router.get("/", (req, res) => {
  console.log("======================");
  Pet.findAll({
    attributes: ["id", "pet_name", "pet_age", "pet_type", "pet_health"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("homepage", {
        posts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router.get("/post/:id", (req, res) => {
  Pet.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "pet_name", "pet_age", "pet_type", "pet_health"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render("single-post", {
        post,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
