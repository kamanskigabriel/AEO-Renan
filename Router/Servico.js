import express from "express"
import authMiddleware from "../Middleware/auth.js"
import controllerServico from "../Controller/Servico.js"

const router = express.Router()

router.get("/buscar", authMiddleware, controllerServico.Buscar)
router.get("/detalhe/:id", authMiddleware, controllerServico.Detalhe)
router.post("/criar", authMiddleware, controllerServico.Criar)
router.put("/alterar/:id", authMiddleware, controllerServico.Alterar)
router.delete("/deletar/:id", authMiddleware, controllerServico.Deletar)

export default router