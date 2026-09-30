import Funcionario from "../Service/Funcionario.js"

class Controllerfuncionario {
    async buscar(_,res){
        try {
            console.log(req.session)
            const funcionario = await ServiceFuncionario.Buscar()
            res.status(200).send({message : funcionario})
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }
    async Detalhe(req, res){
        try {
            const id=req.params.id
            const funcionario = await ServiceFuncionario.Detalhe(id)
            res.status(200).send({message : funcionario})
        } catch (error) {
            res.status(500).send({message : error.massage})
        }
    }
    async Criar (req, res){
        try {
            const  {nome, senha} = req.body
            await ServiceFuncionario.Criar(nome, senha)
            res.status(201).send ({message : "Funcionario a mais"})
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }
    async Alterar(req,res){
        try {
            const {nome, senha} = req.body
            const id = req.session.id
            await ServiceFuncionario.Alterar(id,nome,senha)
            res.status(201).send({message: "Cadastro feito com sucesso"})
        } catch (error) {
            res.status(500).send({message : error.messages})      
        }
    }
    async Deletar (req,res){
        try {
            const identificador = req.params.id
            await ServiceFuncionario.Deletar(identificador)
            res.status(204).send({message:"Deletado com sucesso"})
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }
    async Login (req,res){
        try {
             const { nome, senha } = req.body
            const token = await ServiceAtendimento.Login(nome, senha)
            res.status(200).send({token})
        } catch (error) {
             res.status(500).send({ mensage: error.message }) 
        }
    }
}
export default new Controllerfuncionario()