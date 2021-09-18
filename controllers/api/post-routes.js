const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Pet, User, } = require("../../models");
const withAuth = require("../../utils/auth");

// get all users
router.get("/", (req, res) => {
  Pet.findAll({
    attributes: ["id", "pet_name", "pet_age", "pet_type", "pet_health"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
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
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  Pet.create({
    pet_name: req.body.pet_name,
    pet_age: req.body.pet_age,
    pet_type: req.body.pet_type,
    pet_health: req.body.pet_health,
    user_id: req.session.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// EDIT PET

router.put("/:id", withAuth, (req, res) => {
  Pet.update(
    {
      pet_name: req.body.pet_name,
      pet_age: req.body.pet_age,
      pet_type: req.body.pet_type,
      pet_health: req.body.pet_health,
      user_id: req.session.user_id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE PET

router.delete("/:id", withAuth, (req, res) => {
  console.log("id", req.params.id);
  Pet.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;