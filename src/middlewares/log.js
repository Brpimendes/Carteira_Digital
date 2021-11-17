const log = (req, res, next) => {
  console.log("Gerando log da aplicação");
  console.log(`Data da requisição: ${new Date()} - Requisição do tipo: ${
    req.method
  },
    realizada para a rota de ${req.url}`);

  next();
};

module.exports = log;
