import jwt from "jsonwebtoken"

const segredo = "M3uS3gr3d0"

export default function authMiddleware(req, res, next) {
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
