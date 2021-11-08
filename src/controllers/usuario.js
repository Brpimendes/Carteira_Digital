exports.getAll = (req, res) => {
  res.send("cheguei aqui");
};

exports.getById = (req, res) => {
  res.send("cheguei aqui pra pegar o usuário por ID");
};

exports.salvar = (req, res) => {
  res.send("cheguei aqui para salvar o usuário");
};

exports.atualizar = (req, res) => {
  res.send("cheguei aqui para atualizar o usuário");
};

exports.deletar = (req, res) => {
  res.send("cheguei aqui deletar o usuário");
};
