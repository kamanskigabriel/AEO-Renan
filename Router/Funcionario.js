import express from 'express'
import autMiddleware from '../Middleware/Funcionario.js'
import Funcionario from '../Controller/Funcionario.js'
const router = express.Router()
router.post("/login",Controllerfuncionario.Login)
router.get("/buscar",autMiddleware, Controllerfuncionario.Buscar)
router.get("/detalhe/:id",autMiddleware, Controllerfuncionario.Detalhe)
router.post("/criar",autMiddleware, Controllerfuncionario.Criar)
router.put("a/alterar/:id",autMiddleware, Controllerfuncionario.Alterar)
router.delete("/deletar/:id",autMiddleware, Controllerfuncionario.Deletar)

export default router