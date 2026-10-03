import express from "express"
import authMiddleware from "../Middleware/auth.js"
import controllerFuncionario from "../Controller/Funcionario.js"

const router = express.Router()

router.post("/login", controllerFuncionario.Login)
router.get("/buscar", authMiddleware, controllerFuncionario.Buscar)
router.get("/detalhe/:id", authMiddleware, controllerFuncionario.Detalhe)
router.post("/criar", authMiddleware, controllerFuncionario.Criar)
router.put("/alterar/:id", authMiddleware, controllerFuncionario.Alterar)
router.delete("/deletar/:id", authMiddleware, controllerFuncionario.Deletar)

export default router