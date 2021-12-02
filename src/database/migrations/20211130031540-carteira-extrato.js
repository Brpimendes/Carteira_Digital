"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("extrato", "carteira_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "carteira",
        key: "conta",
      },
      allowNull: true,
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("extrato", "carteira_id");
  },
};
