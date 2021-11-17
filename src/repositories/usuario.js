const { usuario, carteira } = require("../models");

exports.getAll = () => {
  return usuario.findAll({
    include: [{ model: carteira }],
  });
};

exports.getById = (id) => {
  const usuarioEncontrado = usuario.findByPk(id, {
    include: [{ model: carteira }],
  });

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
    ativo: true,
  });
};

exports.atualizar = async (id, nome, telefone, ativo) => {
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
