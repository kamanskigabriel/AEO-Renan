import express from "express"
import authServico from "../Middleware/Servico.js"
import controllerServico from "../Controller/Servico.js"

const router = express.Router()

router.get("/buscar", authServico, controllerServico.Buscar)
router.get("/detalhe/:id", authServico, controllerServico.Detalhe)
router.post("/criar", authServico, controllerServico.Criar)
router.put("/alterar/:id", authServico, controllerServico.Alterar)
router.delete("/deletar/:id", authServico, controllerServico.Deletar)

export default router