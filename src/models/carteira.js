"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class carteira extends Model {
    static associate(models) {
      // define association here
    }
  }
  carteira.init(
    {
      conta: DataTypes.INTEGER,
      agencia: DataTypes.STRING,
      saldo: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "carteira",
      timestamps: false,
      freezeTableName: true,
      underscored: true,
    }
  );
  return carteira;
};
