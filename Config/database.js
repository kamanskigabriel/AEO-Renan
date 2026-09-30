import { Sequelize } from "sequelize"

const database = new Sequelize({
    database:  "petshop",
    host:  "localhost",
    username:  "root",
    password:  "",
    dialect: "mysql",
})

export default { db: database }