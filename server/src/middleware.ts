import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken'

async function verifyJWT(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['x-access-token']

    if (!token) return res.status(401).json({ auth: false, message: "token vazio" })

    verify(String(token), process.env.JWT_SECRET, (err, decoded) => {

        if (err) return res.status(500).json({ auth: false, message: "Falha ao autenticar token" })

        //req.userId = decoded.id
        next()
    })
}

export { verifyJWT }