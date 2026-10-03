import app from "./app.js"
import database from "./Config/database.js"

const porta = 3000

database.db.sync()
  .then(() => {
    app.listen(porta, () => {
      console.log(`Servidor rodando na porta ${porta}`)
    })
  })
  .catch((error) => {
    console.error("Não foi possível conectar ao banco de dados:", error.message)
    process.exitCode = 1
  })