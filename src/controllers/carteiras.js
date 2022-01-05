const walletRepositories = require("../repositories/carteiras");
const walletServices = require("../services/carteira");

exports.getAll = async (req, res) => {
  const carteiras = await walletRepositories.getAll();

  return res.json(carteiras);
};

exports.transfSaldo = async (req, res) => {
  const { contaEnvio, contaDestino, valor } = req.body;

  const saldoTransferido = await walletServices.transfSaldo(
    contaEnvio,
    contaDestino,
    valor
  );

  return res.json(saldoTransferido);
};

exports.addSaldo = async (req, res) => {
  const conta = req.params.conta;
  const { valor } = req.body;

  const saldoCarteira = await walletServices.addSaldo(conta, valor);

  return res.json(saldoCarteira);
};

exports.makeShop = async (req, res) => {
  const conta = req.params.conta;
  const { compra } = req.body;

  const saldoCarteira = await walletServices.makeShop(conta, compra);

  return res.json(saldoCarteira);
};
