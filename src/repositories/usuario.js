const { usuario, carteira } = require("../models");

exports.getAll = async () => {
  return usuario.findAll({
    include: [{ model: carteira }],
  });
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
    agencia: "0001",
    saldo: 0,
    usuario_id: usuarioId.id,
  });

  return "usuário criado com sucesso!";
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
