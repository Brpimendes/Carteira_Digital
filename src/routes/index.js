const express = require("express");
const userRoutes = require("./usuarios");

const routes = express.Router();

routes.use("/usuarios", userRoutes);

module.exports = routes;
