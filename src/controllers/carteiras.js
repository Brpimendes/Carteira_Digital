const walletRepositories = require("../repositories/carteiras");
const walletServices = require("../services/carteira");

exports.getAll = async (req, res) => {
  const carteiras = await walletRepositories.getAll();

  res.json(carteiras);
};

exports.transfSaldo = async (req, res) => {
  const { contaEnvio, contaDestino, valor } = req.body;

  const saldoTransferido = await walletServices.transfSaldo(
    contaEnvio,
    contaDestino,
    valor
  );

  res.json(saldoTransferido);
};

exports.addSaldo = async (req, res) => {
  const conta = req.params.conta;
  const { valor } = req.body;

  const saldoCarteira = await walletServices.addSaldo(conta, valor);

  res.json(saldoCarteira);
};

exports.makeShop = async (req, res) => {
  const conta = req.params.conta;
  const { compra } = req.body;

  const saldoCarteira = await walletServices.makeShop(conta, compra);

  res.json(saldoCarteira);
};
