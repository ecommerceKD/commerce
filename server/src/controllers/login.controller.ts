import { Request, Response, } from 'express'
import { handlerAuthentication } from '../auth/autenticacao.auth'

async function login(req: Request, res: Response) {
    const token = await handlerAuthentication(req.body.user, req.body.password)

    if (token) return res.status(200).json({ auth: true, token: token })

    return res.status(500).json({ mensagem: "Login inválido" })
}

export default login