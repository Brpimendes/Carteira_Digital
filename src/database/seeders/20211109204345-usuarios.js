"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "usuario",
      [
        {
          nome: "Digdin",
          cpf: "12332112312",
          telefone: "(31)954325241",
          ativo: true,
        },
        {
          nome: "Biruleibe",
          cpf: "13231212332",
          telefone: "(31)954325242",
          ativo: true,
        },
        {
          nome: "Sextou",
          cpf: "14132132189",
          telefone: "(31)954325243",
          ativo: true,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("usuario", null, {});
  },
};
