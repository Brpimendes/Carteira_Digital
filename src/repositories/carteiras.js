const { carteira } = require("../models");

exports.getAll = () => {
  return carteira.findAll();
};

exports.addSaldo = async (conta, valorRecebido) => {
  const contaExiste = await carteira.findOne({ where: { conta } });

  if (!contaExiste) return "Conta inexistente! Informe a conta correta.";

  if (valorRecebido <= 0)
    return "O valor a ser depositado precisa ser maior que 0(zero).";

  var saldoUsuario = contaExiste.saldo;

  var saldoAtual = (saldoUsuario += valorRecebido);

  const saldoAtualizado = await carteira.update(
    {
      saldo: saldoAtual,
    },
    {
      where: { conta },
    }
  );

  return saldoAtualizado;
};

exports.makeShop = async (conta, shop) => {
  const contaExiste = await carteira.findOne({ where: { conta } });

  if (!contaExiste)
    return `Conta inexistente! Favor informar uma conta válida!`;

  var saldoUsuario = contaExiste.saldo;

  if (shop > saldoUsuario) return `Saldo insuficiente para realizar a compra!`;

  var SaldoAtual = (saldoUsuario -= shop);

  const saldoAtualizado = await carteira.update(
    {
      saldo: SaldoAtual,
    },
    {
      where: { conta },
    }
  );

  return saldoAtualizado;
};
