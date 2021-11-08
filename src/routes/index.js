const express = require("express");
const userRoutes = require("./usuarios");

const routes = express.Router();

routes.use("/user", userRoutes);

module.exports = routes;
