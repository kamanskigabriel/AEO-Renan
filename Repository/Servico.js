import Servico from "../Model/Servico.js"

class RepositoryServico {
    async Find() {
        return Servico.findAll()
    }

    async FindById(id) {
        return Servico.findByPk(id)
    }

    async Create(nome, descricao, preco) {
        return Servico.create({ nome, descricao, preco })
    }

    async Update(id, nome, descricao, preco) {
        const servico = await Servico.findByPk(id)
        if (!servico) {
            throw new Error("Serviço não encontrado")
        }

        await servico.update({ nome, descricao, preco })
        return servico
    }

    async Delete(id) {
        const servico = await Servico.findByPk(id)
        if (!servico) {
            throw new Error("Serviço não encontrado")
        }

        await servico.destroy()
        return servico
    }
}

export default new RepositoryServico()