import jwt from "jsonwebtoken"

const segredo = "I s2 s1c3e6"
export default async function autMiddleware(req, res, next){a
    try{
        const token = req.headers['authorization']
        if(!token){
            throw new Error()
        }
        const decoded = jwt.verify(token, segredo)
        req.session = decoded
        next()
    } catch (error){
        res.status(400).send({ message : "Usuário ou Senha inválidos"})
    }
}