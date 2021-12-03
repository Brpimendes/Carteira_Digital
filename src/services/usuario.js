const userRepositories = require("../repositories/usuario");

exports.salvar = async (nome, cpf, telefone) => {
  const usuario = await userRepositories.getByCpf(cpf);

  if (usuario)
    return `Já existe um usuário cadastrado com este CPF em nossa base.`;

  return userRepositories.salvar(nome, cpf, telefone);
};
