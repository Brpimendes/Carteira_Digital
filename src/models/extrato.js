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
      carteira_id: DataTypes.INTEGER,
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
