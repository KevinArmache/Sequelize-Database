"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //association des tables dans une base de donnée
      models.Message.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  Message.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      attachement: DataTypes.STRING,
      like: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Message",
    }
  );
  return Message;
};
