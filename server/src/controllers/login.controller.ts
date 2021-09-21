import { Request, Response } from 'express'
import { handler_authentication_user, handler_authentication_admin } from '../auth/autenticacao.auth'

async function login_user(req: Request, res: Response) {
    const token = await handler_authentication_user(req.body.email, req.body.password)

    if (token) return res.status(200).json({ auth: true, token: token }) 
    // res.setHeader("token", token);

    return res.status(500).json({ mensagem: "Login inválido" })
}

async function login_admin(req: Request, res: Response) {
    const token = await handler_authentication_admin(req.body.email, req.body.password)

    if (token) return res.status(200).json({ auth: true, token: token }) 
    // res.setHeader("token", token);

    return res.status(500).json({ mensagem: "Login inválido" })
}

export {login_user, login_admin}