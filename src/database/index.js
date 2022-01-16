const { Sequelize } = require("sequelize");
var tunnel = require('tunnel-ssh')

const sequelize = new Sequelize("carteiradigital", "root", "BPMdblm12", {
  host: "localhost",
  dialect: "mysql",
});

var config = {
  username: 'root',
  password: 'BPMdblm12',
  host: '192.168.0.86',
  port: 22,
  dstHost:'192.168.0.227',
  dstPort:27015,
  localHost:'127.0.0.1',
  localPort: 27000,
}

tunnel(config, function(error, server){
  if(error){
    console.log(`Erro na conexão com o banco de dados. Erro ${error}`)
  } else {
    console.log(`Server: ${server}`)
    sequelize
    .authenticate()
    .then(function () {
      console.log("Conexão com o banco de dados feita com sucesso");
    })
    .catch(function (err) {
      console.log(`Erro na conexão com banco de dados, erro: ${err}!`);
    });
  }
})

// sequelize
//   .authenticate()
//   .then(function () {
//     console.log("Conexão com o banco de dados feita com sucesso");
//   })
//   .catch(function (err) {
//     console.log(`Erro na conexão com banco de dados, erro: ${err}!`);
//   });
