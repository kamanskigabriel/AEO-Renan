import express from "express"
import authFuncionario from "../Middleware/Funcionario.js"
import controllerFuncionario from "../Controller/Funcionario.js"

const router = express.Router()

router.post("/login", controllerFuncionario.Login)
router.get("/buscar", authFuncionario, controllerFuncionario.Buscar)
router.get("/detalhe/:id", authFuncionario, controllerFuncionario.Detalhe)
router.post("/criar", authFuncionario, controllerFuncionario.Criar)
router.put("/alterar/:id", authFuncionario, controllerFuncionario.Alterar)
router.delete("/deletar/:id", authFuncionario, controllerFuncionario.Deletar)

export default router