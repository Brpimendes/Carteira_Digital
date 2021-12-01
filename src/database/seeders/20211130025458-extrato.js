"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "extrato",
      [
        {
          operacao: "DEBITO",
          valor: 15,
          conta_id: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("extrato", null, {});
  },
};
