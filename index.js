import express from "express"
import database from "./Config/database.js"
import router from "./Router/Funcionario.js"

const app = express()
app.use(express.json())
app.use("/app/v1/petshop", router)

database.db.sync({force: true}).then((_)=>{
    app.listen(3000,()=>{
        console.log("Servidor rodando na porta 3000")
    })
})
.catch((e) => {
    console.log(e)
})