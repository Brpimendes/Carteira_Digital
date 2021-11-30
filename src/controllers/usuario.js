const userRepositories = require("../repositories/usuario");
const userServices = require("../validators/createUsuario");

exports.getAll = async (req, res) => {
  const usuarios = await userRepositories.getAll();

  return res.json(usuarios);
};

exports.getById = async (req, res) => {
  const usuario = await userRepositories.getById(req.params.id);

  return res.json(usuario);
};

exports.salvar = async (req, res) => {
  const { nome, cpf, telefone } = req.body;

  const usuario = await userRepositories.salvar(nome, cpf, telefone);

  return res.json(usuario);
};

exports.atualizar = async (req, res) => {
  const userId = req.params.id;
  const { nome, telefone } = req.body;

  const usuario = await userRepositories.atualizar(userId, nome, telefone);

  res.json(usuario);
};

exports.deletar = async (req, res) => {
  await userRepositories.deletar(req.params.id);

  res.send(`Usuário desativado em nossa base.`);
};
