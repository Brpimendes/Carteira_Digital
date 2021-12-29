const { carteira, extrato } = require("../models");

exports.getAll = () => {
  const carteiras = carteira.findAll();

  return carteiras;
};

exports.getByAccount = (conta) => {
  return carteira.findOne({ where: { conta } });
};

exports.transfSaldo = async (
  contaEnvio,
  contaDestino,
  valor,
  saldoContaEnvio,
  saldoContaDestino
) => {
  await carteira.update(
    {
      saldo: saldoContaEnvio,
    },
    {
      where: { conta: contaEnvio },
    }
  );

  await extrato.create({
    operacao: "DEBITO",
    valor,
    carteiraId: contaEnvio,
  });

  await carteira.update(
    {
      saldo: saldoContaDestino,
    },
    {
      where: { conta: contaDestino },
    }
  );

  await extrato.create({
    operacao: "CREDITO",
    valor,
    carteiraId: contaDestino,
  });

  return `Transferência realizada com sucesso.`;
};

exports.addSaldo = async (conta, valorRecebido, saldoAtual) => {
  await carteira.update(
    {
      saldo: saldoAtual,
    },
    {
      where: { conta },
    }
  );

  await extrato.create({
    operacao: "CREDITO",
    valor: valorRecebido,
    carteiraId: conta,
  });

  return `Saldo Adicionado com Sucesso`;
};

exports.makeShop = async (conta, compra, saldoAtual) => {
  await carteira.update(
    {
      saldo: saldoAtual,
    },
    {
      where: { conta },
    }
  );

  await extrato.create({
    operacao: "COMPRAS",
    valor: compra,
    carteiraId: conta,
  });

  return `Compra realizada com sucesso.`;
};
