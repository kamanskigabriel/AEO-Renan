import database from '../Config/database.js'

class Funcionario {
    constructor() {
        this.model = database.db.define("Funcionario",{
            id: {
                type : database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type : database.db.Sequelize.STRING,
            },
            senha: {
                type : database.db.Sequelize.STRING,
            }
        })
    }
}
export default new Funcionario()