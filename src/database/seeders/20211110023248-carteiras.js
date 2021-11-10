"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "carteira",
      [
        {
          usuario_id: 1,
          agencia: "0001",
          saldo: 10.0,
        },
        {
          usuario_id: 2,
          agencia: "0001",
          saldo: 20.0,
        },
        {
          usuario_id: 3,
          agencia: "0001",
          saldo: 30.0,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("carteira", null, {});
  },
};
