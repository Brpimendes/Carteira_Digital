const { usuario, carteira } = require("../models");

exports.getAll = async () => {
  return usuario.findAll({
    include: [{ model: carteira }],
  });

  // return carteira.findAll();
};

exports.getById = async (id) => {
  const usuarioEncontrado = await usuario.findByPk(id, {
    include: [{ model: carteira }],
  });

  return usuarioEncontrado;
};

exports.getByCpf = (cpf) => {
  return usuario.findOne({ where: { cpf } });
};

exports.salvar = async (nome, cpf, telefone) => {
  await usuario.create({
    nome,
    cpf,
    telefone,
    ativo: true,
  });

  const usuarioId = await usuario.findOne({
    attributes: ["id"],
    where: { cpf },
  });

  await carteira.create({
    id: usuarioId.id,
    agencia: "0001",
    saldo: 0,
    usuarioId: usuarioId.id,
  });

  return "usuário criado com sucesso!";
};

exports.atualizar = async (id, nome, telefone) => {
  usuario.update(
    {
      nome,
      telefone,
    },
    {
      where: { id },
    }
  );

  return `Usuário atualizado com sucesso!`;
};

exports.deletar = (id) => {
  usuario.update(
    {
      ativo: false,
    },
    {
      where: { id },
    }
  );
  return `Usuário desativado de nossa base`;
};
