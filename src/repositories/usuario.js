exports.getAll = () => {
  return "cheguei aqui";
};

exports.getById = (id) => {
  return `Retornando dados do usuario ID = ${id}`;
};

exports.salvar = (nome, email) => {
  return `Olá ${nome}, seus dados foram salvos em nossa base de dados. Seu dados de acesso é o email ${email}.`;
};

exports.atualizar = (id, nome, email) => {
  return `Usuário ID ${id}, seus dados foram atualizados, seu nome é ${nome} e seu email é ${email}}.`;
};

exports.deletar = (id) => {
  return `Deletados os dados da nossa base para o usuário ID ${id}.`;
};
