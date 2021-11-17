"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    static associate(models) {
      this.hasOne(models.carteira);
    }
  }
  usuario.init(
    {
      nome: DataTypes.STRING,
      cpf: DataTypes.STRING,
      telefone: DataTypes.STRING,
      ativo: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "usuario",
      timestamps: false,
      freezeTableName: true,
    }
  );
  return usuario;
};
