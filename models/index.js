// import all models
const Pet = require("./Post");
const User = require("./User");
// const Comment = require("./Comment");

// create associations
User.hasMany(Pet, {
  foreignKey: "user_id",
});

Pet.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

// Comment.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// Comment.belongsTo(Post, {
//   foreignKey: "post_id",
//   onDelete: "SET NULL",
// });

// User.hasMany(Comment, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// Post.hasMany(Comment, {
//   foreignKey: "post_id",
// });

module.exports = { User, Pet, };
