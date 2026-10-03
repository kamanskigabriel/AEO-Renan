import express from "express"
import router from "./Router/Funcionario.js"
import routerServico from "./Router/Servico.js"

const app = express()

app.use(express.json())
app.use("/app/v1/petshop", router)
app.use("/app/v1/petshop/servicos", routerServico)

export default app
