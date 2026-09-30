import Funcionario from "../Model/Funcionario.js"

class RepositoryFuncionario {
    async Find() {
        return Funcionario.findAll({ attributes: { exclude: ["senha"] } })
    }

    async FindById(id) {
        return Funcionario.findByPk(id, { attributes: { exclude: ["senha"] } })
    }

    async FindByNome(nome) {
        return Funcionario.findOne({ where: { nome } })
    }

    async Create(nome, senha) {
        const funcionario = await Funcionario.create({ nome, senha })
        const resultado = funcionario.toJSON()
        delete resultado.senha
        return resultado
    }

    async Update(id, dados) {
        const funcionario = await Funcionario.findByPk(id)
        if (!funcionario) {
            throw new Error("Funcionário não encontrado")
        }

        await funcionario.update(dados)
        const resultado = funcionario.toJSON()
        delete resultado.senha
        return resultado
    }

    async Delete(id) {
        const funcionario = await Funcionario.findByPk(id)
        if (!funcionario) {
            throw new Error("Funcionário não encontrado")
        }

        await funcionario.destroy()
        return funcionario
    }
}

export default new RepositoryFuncionario()