const { extrato } = require("../models");

exports.getExtratoCliente = (id) => {
  const userExtrato = extrato.findAll({ where: { carteira_id: id } });

  return userExtrato;
};
