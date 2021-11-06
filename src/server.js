const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("opa tô aqui!!");
});

app.listen(3000, function () {
  console.log("App rodando na porta 3000.");
});
