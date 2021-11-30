"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("carteira", "usuario_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "usuario",
        key: "id",
      },
      allowNull: true,
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("carteira", "usuario_id");
  },
};
