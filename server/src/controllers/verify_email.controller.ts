import { Request, Response } from 'express'
import Usuario from '../models/usuario.model'


async function verify_email(req: Request, res: Response) {
    const user = await Usuario.findOne({ confirmationCode: req.params.confirmationCode })

    if (!user) return res.status(404).send({ message: "Usuario não encontrado!" })

    const user_up = await Usuario.findByIdAndUpdate(
        user.id,
        { status: "Active" },
        { new: true }
    )

    res.status(200).send({ message: "Email confirmado com sucesso!", user_up })
}

export { verify_email }