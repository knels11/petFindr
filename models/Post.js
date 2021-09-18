const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// create our Post model
class Pet extends Model {
  // static upvote(body, models) {
  //   return models.Vote.create({
  //     user_id: body.user_id
  //   }).then(() => {
  //     return Pet.findOne({
  //       where: {
  //         id: body.user_id,
  //       },
  //       attributes: ["id", "pet_name", "pet_age", "pet_type", "pet_health"],
  //       include: {
  //         model: models.User,
  //         attributes: ["username"],
  //       },
  //     });
  //   });
  // }
}

// create fields/columns for Post model
Pet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    pet_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 16]
      }
    },

    pet_age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    pet_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    pet_health: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Pet;
