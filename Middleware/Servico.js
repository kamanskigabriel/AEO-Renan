import jwt from "jsonwebtoken"

const segredo = "M3uS3gr3d0"

if (!process.env.JWT_SECRET && process.env.NODE_ENV === "production") {
    throw new Error("JWT_SECRET deve ser configurado em produção")
}

export default function authServico(req, res, next) {
    const authorization = req.headers.authorization
    const token = authorization?.startsWith("Bearer ")
        ? authorization.slice(7)
        : authorization

    if (!token) {
        return res.status(401).send({ message: "Token não informado" })
    }

    try {
        req.session = jwt.verify(token, segredo)
        return next()
    } catch {
        return res.status(401).send({ message: "Token inválido ou expirado" })
    }
}