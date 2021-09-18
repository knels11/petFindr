const router = require('express').Router();
const sequelize = require('../config/connection');
const { Pet, User } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Pet.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'pet_name',
      'pet_age',
      'pet_type',
      'pet_health',

    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// EDIT PET FROM DASHBOARD

router.get('/edit/:id', withAuth, (req, res) => {
  Pet.findByPk(req.params.id, {
    attributes: [
      'id',
      'pet_name',
      'pet_age',
      'pet_type',
      'pet_health'

    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });

        res.render('edit-post', {
          post,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;