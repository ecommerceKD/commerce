import { Request, Response } from 'express'
import { send_email } from '../config/nodemailer.config'
import { body_redefinition_pass } from '../config/body_email.config'
import Usuario from '../models/usuario.model'

async function email_pass(req: Request, res: Response) {
    const id = req.params.id

    try {
        const user = await Usuario.findOne({ _id: id })
        send_email(
            user.email_usuario,
            user.nome_usuario,
            user.id,
            body_redefinition_pass
        )
        res.status(200).json({ message: "Email com link para alterar senha enviado com sucesso"})
    } catch (error) {
        res.status(404).json({ message: "Usuario não existe"})
    }
}

export { email_pass }