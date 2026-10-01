import repositoryServico from "../Repository/Servico.js"

class ServiceServico {
    async Buscar() {
        return repositoryServico.Find()
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Id não informado")
        }

        const servico = await repositoryServico.FindById(id)
        if (!servico) {
            throw new Error(`Id ${id} não encontrado`)
        }
        return servico
    }

    async Criar(nome, descricao, preco) {
        if (!nome || !descricao || preco === undefined || preco === null || preco === "") {
            throw new Error("Nome, descrição e preço são obrigatórios")
        }
        if (!Number.isFinite(Number(preco)) || Number(preco) < 0) {
            throw new Error("Preço inválido")
        }

        return repositoryServico.Create(nome, descricao, preco)
    }

    async Alterar(id, nome, descricao, preco) {
        if (!id) {
            throw new Error("Id não informado")
        }
        if (!nome && !descricao && (preco === undefined || preco === null || preco === "")) {
            throw new Error("Informe ao menos um campo para alterar")
        }

        const dados = {}
        if (nome) dados.nome = nome
        if (descricao) dados.descricao = descricao
        if (preco !== undefined && preco !== null && preco !== "") {
            if (!Number.isFinite(Number(preco)) || Number(preco) < 0) {
                throw new Error("Preço inválido")
            }
            dados.preco = preco
        }
        return repositoryServico.Update(id, dados)
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Id não informado")
        }
        return repositoryServico.Delete(id)
    }
}

export default new ServiceServico()