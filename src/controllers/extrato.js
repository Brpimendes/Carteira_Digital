const extratoRepository = require("../repositories/extrato");

exports.getExtratoCliente = async (req, res) => {
  const id = req.params.id;

  const userExtrato = await extratoRepository.getExtratoCliente(id);

  return res.json(userExtrato);
};
