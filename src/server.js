const express = require("express");
const routes = require("./routes");

const app = express();

app.use(routes);

app.listen(3000, function () {
  console.log("App rodando na porta 3000.");
});
