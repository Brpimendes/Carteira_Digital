const express = require("express");
const extratoController = require("../controllers/extrato");

const extratoRouter = express.Router();

extratoRouter.get("/:id", extratoController.getExtratoCliente);

module.exports = extratoRouter;
