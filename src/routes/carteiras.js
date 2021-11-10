const express = require("express");
const walletController = require("../controllers/carteiras");

const walletRoutes = express.Router();

walletRoutes.get("/", walletController.getAll);

module.exports = walletRoutes;
