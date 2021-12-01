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
      conta_id: DataTypes.INTEGER,
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
