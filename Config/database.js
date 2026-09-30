import { Sequelize } from "sequelize"

const database = new Sequelize({
    database: process.env.DB_NAME || "petshop",
    host: process.env.DB_HOST || "localhost",
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    dialect: "mysql",
    logging: false
})

export default { db: database }