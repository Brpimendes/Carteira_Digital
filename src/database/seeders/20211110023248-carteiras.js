"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "carteira",
      [
        {
          id: 1,
          usuario_id: 1,
          agencia: "0001",
          saldo: 10.0,
        },
        {
          id: 2,
          usuario_id: 2,
          agencia: "0001",
          saldo: 20.0,
        },
        {
          id: 3,
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
