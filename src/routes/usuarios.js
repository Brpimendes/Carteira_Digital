const express = require("express");
const userController = require("../controllers/usuario");

const userRoutes = express.Router();

userRoutes.get("/", userController.getAll);
userRoutes.get("/:id", userController.getById);
userRoutes.post("/", userController.salvar);
userRoutes.put("/:id", userController.atualizar);
userRoutes.delete("/:id", userController.deletar);

module.exports = userRoutes;
