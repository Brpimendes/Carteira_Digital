const express = require("express");
const walletController = require("../controllers/carteiras");

const walletRoutes = express.Router();

walletRoutes.get("/", walletController.getAll);
walletRoutes.put("/:conta", walletController.addSaldo);
walletRoutes.put("/fazerCompra/:conta", walletController.makeShop);

module.exports = walletRoutes;
