import { DataTypes } from "sequelize"
import database from "../Config/database.js"

const Funcionario = database.db.define("Funcionario", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Funcionario