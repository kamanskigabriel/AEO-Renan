import funcionario from '../Model/Funcionario.js'
class RepositoryFuncionario {
    async Find (){
        const funcionarios = await funcionario.findAll()
        return funcionarios
    }
    async FindById (id){
        const funcionariodetalhe = await funcionario.findByPk(id)
        return funcionariodetalhe
    }
    async Create (nome, telefone){
        const create = await funcionario.create({ nome, telefone })
        return create
    }
    async Update (id, nome, telefone){
        const update = await funcionario.findByPk(id)
        if(!update){
            throw new Error("Funcionario não encontrado")
        }
        update.nome = nome
        update.telefone = telefone
        await update.save()
    }
    async Delete (id){
        const funcionariodelet = await funcionario.findByPk(id)
        if(!funcionariodelet){
            throw new Error("Funcionario não encontrado")
        }
        await funcionariodelet.destroy()
        return funcionariodelet
    }
}
export default new RepositoryFuncionario()