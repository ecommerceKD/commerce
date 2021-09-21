import { Request, Response } from 'express'
import Usuario from '../models/usuario.model'


async function verify_email(req: Request, res: Response) {
    try {
        const user = await Usuario.findOne({ confirmationCode: req.params.confirmationCode })

        const user_up = await Usuario.findByIdAndUpdate(
            user.id,
            { status: "Active" },
            { new: true }
        )

        res.status(200).send({ message: "Email confirmado com sucesso!", user_up })
    } catch (error) {
        return res.status(404).send({ message: "Usuario não encontrado!" })
    }
}

export { verify_email }