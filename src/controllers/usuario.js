const userRepositories = require("../repositories/usuario");

exports.getAll = async (req, res) => {
  const usuarios = await userRepositories.getAll();

  res.send(usuarios);
};

exports.getById = async (req, res) => {
  const usuario = await userRepositories.getById(req.params.id);

  return res.send(usuario);
};

exports.salvar = async (req, res) => {
  const { nome, email } = req.body;

  const usuario = await userRepositories.salvar(nome, email);

  res.send(usuario);
};

exports.atualizar = async (req, res) => {
  const userId = req.params.id;
  const { nome, email } = req.body;

  const usuario = await userRepositories.atualizar(userId, nome, email);

  res.send(usuario);
};

exports.deletar = async (req, res) => {
  const usuario = await userRepositories.deletar(req.params.id);

  res.send(usuario);
};
