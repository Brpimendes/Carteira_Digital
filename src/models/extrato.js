"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class extrato extends Model {
    static associate(models) {
      // define association here
    }
  }
  extrato.init(
    {
      operacao: DataTypes.STRING,
      valor: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "extrato",
      freezeTableName: true,
      timestamps: false,
      underscored: true,
    }
  );
  return extrato;
};
