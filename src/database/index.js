const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("carteiradigital", "root", "BPMdblm12", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(function () {
    console.log("Conexão com o banco de dados feita com sucesso");
  })
  .catch(function (err) {
    console.log(`Erro na conexão com banco de dados, erro: ${err}!`);
  });
