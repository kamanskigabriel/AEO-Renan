import { DataTypes } from "sequelize"
import database from "../Config/database.js"

const Servico = database.db.define("Servico", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
})

export default Servico