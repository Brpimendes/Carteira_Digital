const { carteira, extrato } = require("../models");

exports.getAll = () => {
  const carteiras = carteira.findAll();

  return carteiras;
};

exports.transfSaldo = async (contaEnvio, contaDestino, valor) => {
  var contaEnvioExiste = await carteira.findOne({
    where: { conta: contaEnvio },
  });

  if (!contaEnvioExiste) return "Conta de Envio não existe!";

  var contaDestinoExiste = await carteira.findOne({
    where: { conta: contaDestino },
  });

  if (!contaDestinoExiste)
    return "Conta de Destino não localizada! Favor, informar um conta existente";

  var checarSaldo = contaEnvioExiste.saldo;

  if (checarSaldo === 0) return `Adicionar saldo para realizar operações`;

  if (checarSaldo < valor)
    return `Saldo insuficiente para realizar a tranferencia`;

  var saldoContaEnvio = (contaEnvioExiste.saldo -= valor);

  var saldoContaDestino = (contaDestinoExiste.saldo += valor);

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
    carteira_id: contaEnvio,
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
    carteira_id: contaDestino,
  });

  return `Transferência realizada com sucesso.`;
};

exports.addSaldo = async (conta, valorRecebido) => {
  const contaExiste = await carteira.findOne({ where: { conta } });

  if (!contaExiste) return "Conta inexistente! Informe a conta correta.";

  if (valorRecebido <= 0)
    return "O valor a ser depositado precisa ser maior que 0(zero).";

  var saldoUsuario = contaExiste.saldo;

  var saldoAtual = (saldoUsuario += valorRecebido);

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
    carteira_id: conta,
  });

  return `Saldo Adicionado com Sucesso`;
};

exports.makeShop = async (conta, shop) => {
  const contaExiste = await carteira.findOne({ where: { conta } });

  if (!contaExiste)
    return `Conta inexistente! Favor informar uma conta válida!`;

  var saldoUsuario = contaExiste.saldo;

  if (saldoUsuario == 0)
    return `Seu saldo é 0, adicionar saldo para fazer compras!`;

  if (shop > saldoUsuario) return `Saldo insuficiente para realizar a compra!`;

  var SaldoAtual = (saldoUsuario -= shop);

  await carteira.update(
    {
      saldo: SaldoAtual,
    },
    {
      where: { conta },
    }
  );

  await extrato.create({
    operacao: "COMPRAS",
    valor: shop,
    carteira_id: conta,
  });

  return `Compra realizada com sucesso.`;
};
