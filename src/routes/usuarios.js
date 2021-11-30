const express = require("express");
const userController = require("../controllers/usuario");
const userRoutes = express.Router();
const userValidator = require("../validators/createUsuario");

userRoutes.get("/", userController.getAll);
userRoutes.get("/:id", userController.getById);
userRoutes.post("/", userValidator, userController.salvar);
userRoutes.put("/:id", userController.atualizar);
userRoutes.delete("/:id", userController.deletar);

module.exports = userRoutes;
