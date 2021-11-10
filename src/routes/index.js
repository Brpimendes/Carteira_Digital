const express = require("express");
const userRoutes = require("./usuarios");
const walletRoutes = require("./carteiras");

const routes = express.Router();

routes.use("/usuarios", userRoutes);
routes.use("/carteiras", walletRoutes);

module.exports = routes;
