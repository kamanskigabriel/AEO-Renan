import Repositoryfunciorio from '../Repository/Funcionario.js'

class ServiceFuncionario {
    async Buscar (id){
        return Repositoryfunciorio.Find
    }
    async Detalhe (id){
        if(!id){
            throw new Error("Id não informado")
        }
        const funcionario = await Repositoryfunciorio.FindById(id)
        if(!funcionario){
            throw new Error(`ID ${id} não encontrado`)
        }
        return funcionario
    }
    async Criar (nome, senha){
        if(!nome || !senha){
            throw new Error("Nome ou senha não informado")
        }
        const senhacripto = await bcrypt.hash(senha, 12)
        const funcionario = await Repositoryfunciorio.Create(nome, senha)
        return funcionario
    }
    async Alterar (id, nome, senha){
        if(!id){
            throw new Error("Id não informado")
        }
        const senhacripto = !senha
        ? undefined
        : await bcrypt.hash(senha, 12)
        const funcionario = await Repositoryfunciorio.Update(id, nome, senhacripto)
        return funcionario
    }
    async Deletar (id){
        if(!id){
            throw new Error("Id não informado")
        }
        const funcionario = await Repositoryfunciorio.Delete(id)
        return funcionario
    }
    async Login (nome, senha){
        if(!nome || !senha){
            throw new Error("Nome ou senha não informado")
        }
        const funcionario = await Repositoryfunciorio.FindByNome(nome)
        if(!funcionario){
            throw new Error("Nome ou senha inválidos")
        }
        if(!await bcrypt.compare(senha, funcionario.senha)){
            throw new Error("Nome ou senha inválidos")
        }
        return jwt.sing({
            id : atendimento.id,email
        }, segredo,
    {expiresIn : 60 * 60})
    }
}
export default new ServiceFuncionario()