import serviceServico from "../Service/Servico.js"

class ControllerServico {
    async Buscar(_req, res) {
        try {
            const servicos = await serviceServico.Buscar()
            res.status(200).send({ servicos })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Detalhe(req, res) {
        try {
            const servico = await serviceServico.Detalhe(req.params.id)
            res.status(200).send({ servico })
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    }

    async Criar(req, res) {
        try {
            const { nome, descricao, preco } = req.body
            const servico = await serviceServico.Criar(nome, descricao, preco)
            res.status(201).send({ servico })
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    async Alterar(req, res) {
        try {
            const { nome, descricao, preco } = req.body
            const servico = await serviceServico.Alterar(req.params.id, nome, descricao, preco)
            res.status(200).send({ servico })
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    async Deletar(req, res) {
        try {
            await serviceServico.Deletar(req.params.id)
            res.status(204).end()
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    }
}

export default new ControllerServico()