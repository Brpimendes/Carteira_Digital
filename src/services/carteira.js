const walletRepositories = require("../repositories/carteiras");

exports.addSaldo = async (conta, valor) => {
  const contaExiste = await walletRepositories.getByAccount(conta);

  if (!contaExiste) return "Conta inexistente! Informe a conta correta.";

  if (valor <= 0)
    return "O valor a ser depositado precisa ser maior que 0(zero).";

  var saldoUsuario = contaExiste.saldo;

  var saldoAtual = (saldoUsuario += valor);

  return walletRepositories.addSaldo(conta, valor, saldoAtual);
};

exports.makeShop = async (conta, compra) => {
  const contaExiste = await walletRepositories.getByAccount(conta);

  if (!contaExiste)
    return `Conta inexistente! Favor informar uma conta válida!`;

  var saldoUsuario = contaExiste.saldo;

  if (saldoUsuario == 0)
    return `Seu saldo é 0, adicionar saldo para fazer compras!`;

  if (compra > saldoUsuario)
    return `Saldo insuficiente para realizar a compra!`;

  var saldoAtual = (saldoUsuario -= compra);

  return walletRepositories.makeShop(conta, compra, saldoAtual);
};

exports.transfSaldo = async (contaEnvio, contaDestino, valor) => {
  var contaEnvioExiste = await walletRepositories.getByAccount(contaEnvio);

  if (!contaEnvioExiste) return "Conta de Envio não existe!";

  var contaDestinoExiste = await walletRepositories.getByAccount(contaDestino);

  if (!contaDestinoExiste)
    return "Conta de Destino não localizada! Favor, informar um conta existente";

  if (contaEnvioExiste.conta === contaDestinoExiste.conta)
    return "Conta de Envio não pode ser a mesma que a de Destino. Favor, selecionar outra conta de Destino para realizar a transferência.";

  var saldoUsuario = contaEnvioExiste.saldo;

  if (saldoUsuario === 0) return `Adicione saldo para realizar transferências`;

  if (saldoUsuario < valor)
    return `Saldo insuficiente para realizar a transferência`;

  if (valor <= 0) return `O valor da transferência deve ser maior que 0(zero).`;

  var saldoContaEnvio = (contaEnvioExiste.saldo -= valor);

  var saldoContaDestino = (contaDestinoExiste.saldo += valor);

  return walletRepositories.transfSaldo(
    contaEnvio,
    contaDestino,
    valor,
    saldoContaEnvio,
    saldoContaDestino
  );
};
