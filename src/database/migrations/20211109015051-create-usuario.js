"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("usuario", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
        require: tur,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("usuario");
  },
};
