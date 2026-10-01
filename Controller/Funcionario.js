import serviceFuncionario from "../Service/Funcionario.js"

class ControllerFuncionario {
    async Buscar(_req, res) {
        try {
            const funcionarios = await serviceFuncionario.Buscar()
            res.status(200).send({ funcionarios })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Detalhe(req, res) {
        try {
            const funcionario = await serviceFuncionario.Detalhe(req.params.id)
            res.status(200).send({ funcionario })
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    }

    async Criar(req, res) {
        try {
            const { nome, senha } = req.body
            const funcionario = await serviceFuncionario.Criar(nome, senha)
            res.status(201).send({ funcionario })
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    async Alterar(req, res) {
        try {
            const { nome, senha } = req.body
            const funcionario = await serviceFuncionario.Alterar(req.params.id, nome, senha)
            res.status(200).send({ funcionario })
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    async Deletar(req, res) {
        try {
            await serviceFuncionario.Deletar(req.params.id)
            res.status(204).end()
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    }

    async Login(req, res) {
        try {
            const { nome, senha } = req.body
            const token = await serviceFuncionario.Login(nome, senha)
            res.status(200).send({ token })
        } catch (error) {
            res.status(401).send({ message: error.message })
        }
    }
}

export default new ControllerFuncionario()