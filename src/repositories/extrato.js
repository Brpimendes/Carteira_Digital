const { extrato } = require("../models");

exports.getExtratoCliente = (id) => {
  const userExtrato = extrato.findAll({ where: { carteiraId: id } });

  return userExtrato;
};
