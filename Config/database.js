import { Sequelize } from "sequelize"

const database = new Sequelize({
    database: "petshop",
    host: "localhost",
    username: "root",
    password: "",
    dialect: "mysql",
    logging: false,
})

export default { db: database }