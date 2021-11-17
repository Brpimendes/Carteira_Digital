const walletRepositories = require("../repositories/carteiras");

exports.getAll = async (req, res) => {
  const carteiras = await walletRepositories.getAll();

  res.json(carteiras);
};

exports.addSaldo = async (req, res) => {
  const conta = req.params.conta;
  const { saldo } = req.body;

  const saldoCarteira = await walletRepositories.addSaldo(conta, saldo);

  res.json(saldoCarteira);
};

exports.makeShop = async (req, res) => {
  const conta = req.params.conta;
  const { shop } = req.body;

  const saldoCarteira = await walletRepositories.makeShop(conta, shop);

  res.json(saldoCarteira);
};
