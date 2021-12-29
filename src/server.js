const express = require("express");
const routes = require("./routes");
const log = require("./middlewares/log");
const cors = require("cors");

require("./database");

const app = express();

app.use(express.json());
app.use(log);
app.use(cors());
app.use(routes);

app.listen(3000, function () {
  console.log("App rodando na porta 3000.");
});
