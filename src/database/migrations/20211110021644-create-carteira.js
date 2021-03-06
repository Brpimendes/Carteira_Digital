"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("carteira", {
      id: {
        type: Sequelize.INTEGER,
      },
      conta: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      agencia: {
        default: "0001",
        type: Sequelize.STRING,
      },
      saldo: {
        default: 0.0,
        type: Sequelize.FLOAT,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("carteira");
  },
};
