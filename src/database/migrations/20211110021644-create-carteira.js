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
      usuario_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "usuario",
          key: "id",
        },
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
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
