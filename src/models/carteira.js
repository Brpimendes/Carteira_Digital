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
      usuario_id: DataTypes.INTEGER,
      agencia: DataTypes.STRING,
      conta: DataTypes.INTEGER,
      saldo: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "carteira",
      timestamps: false,
      freezeTableName: true,
    }
  );
  return carteira;
};
