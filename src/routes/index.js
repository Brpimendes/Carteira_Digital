const express = require("express");
const userRoutes = require("./usuarios");
const walletRoutes = require("./carteiras");
const extratoRoutes = require("./extratos");

const routes = express.Router();

routes.use("/usuarios", userRoutes);
routes.use("/carteiras", walletRoutes);
routes.use("/extratos", extratoRoutes);

module.exports = routes;
