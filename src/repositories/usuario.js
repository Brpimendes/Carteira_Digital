const { usuario } = require("../models");

exports.getAll = () => {
  return usuario.findAll();
};

exports.getById = (id) => {
  const usuarioEncontrado = usuario.findByPk(id);

  return usuarioEncontrado;
};

exports.salvar = async (nome, cpf, telefone) => {
  if (!nome || !cpf) {
    return "O nome e o CPF são obrigatórios!";
  }

  return usuario.create({
    nome,
    cpf,
    telefone,
  });
};

exports.atualizar = async (id, nome, telefone) => {
  const usuarioEncontrado = usuario.update(
    {
      nome,
      telefone,
    },
    {
      where: { id },
    }
  );

  return usuarioEncontrado;
};

exports.deletar = (id) => {
  const usuarioEncontrado = usuario.update(
    {
      ativo: false,
    },
    {
      where: { id },
    }
  );
  return usuarioEncontrado;
};
