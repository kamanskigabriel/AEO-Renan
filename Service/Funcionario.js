import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import repositoryFuncionario from "../Repository/Funcionario.js"

const segredo =  "M3uS3gr3d0"

if (!process.env.JWT_SECRET && process.env.NODE_ENV === "production") {
    throw new Error("JWT_SECRET deve ser configurado em produção")
}

class ServiceFuncionario {
    async Buscar() {
        return repositoryFuncionario.Find()
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Id não informado")
        }

        const funcionario = await repositoryFuncionario.FindById(id)
        if (!funcionario) {
            throw new Error(`Id ${id} não encontrado`)
        }
        return funcionario
    }

    async Criar(nome, senha) {
        if (!nome || !senha) {
            throw new Error("Nome e senha são obrigatórios")
        }

        const senhaCriptografada = await bcrypt.hash(senha, 12)
        return repositoryFuncionario.Create(nome, senhaCriptografada)
    }

    async Alterar(id, nome, senha) {
        if (!id) {
            throw new Error("Id não informado")
        }
        if (!nome && !senha) {
            throw new Error("Informe o nome ou a senha para alterar")
        }

        const dados = {}
        if (nome) dados.nome = nome
        if (senha) dados.senha = await bcrypt.hash(senha, 12)
        return repositoryFuncionario.Update(id, dados)
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Id não informado")
        }
        return repositoryFuncionario.Delete(id)
    }

    async Login(nome, senha) {
        if (!nome || !senha) {
            throw new Error("Nome e senha são obrigatórios")
        }

        const funcionario = await repositoryFuncionario.FindByNome(nome)
        if (!funcionario || !await bcrypt.compare(senha, funcionario.senha)) {
            throw new Error("Nome ou senha inválidos")
        }

        return jwt.sign({ id: funcionario.id, nome: funcionario.nome }, segredo, {
            expiresIn: "1h"
        })
    }
}

export default new ServiceFuncionario()