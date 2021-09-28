import { Request, Response } from 'express'
import { hash } from "bcrypt"
import Usuario from '../models/usuario.model'
import { send_email } from '../config/nodemailer.config'
import { body_confirm_email } from '../config/body_email.config'
const saltRounds = 10

async function create(req: Request, res: Response) {
    // Verificando se o usuário existe no bd
    let usuario = await Usuario.findOne({ "email_usuario": req.body.email_usuario })

    // Encriptando a senha do usuario para salvar no bd
    const hash_pass1 = await hash(req.body.senha1_usuario, saltRounds)
    const hash_pass2 = await hash(req.body.senha2_usuario, saltRounds)
    const hash_confirmCode = await hash(req.body.nome_usuario, saltRounds)
    const confirmationCode = hash_confirmCode.replace('/', '_')
    if (!usuario) {
        const data = {
            "nome_usuario": req.body.nome_usuario,
            "email_usuario": req.body.email_usuario,
            "senha1_usuario": hash_pass1,
            "senha2_usuario": hash_pass2,
            "eAdmin": req.body.eAdmin,
            // "status": req.body.status,
            "confirmationCode": confirmationCode,
            "rua_usuario": req.body.rua_usuario,
            "bairro_usuario": req.body.bairro_usuario,
            "cidade_usuario": req.body.cidade_usuario,
            "estado_usuario": req.body.estado_usuario,
            "num_usuario": req.body.num_usuario,
            "cep_usuario": req.body.cep_usuario,
            "tipo_telefone": req.body.tipo_telefone,
            "numero_telefone1": req.body.numero_telefone1,
            "numero_telefone2": req.body.numero_telefone2,
        }

        usuario = await Usuario.create(data)

        //enviar email com link de confirmação
        send_email(
            data.email_usuario,
            data.nome_usuario,
            data.confirmationCode,
            body_confirm_email
        )

        return res.status(201).json(usuario)
    } else {
        return res.status(500).json({ mensagem: "Usuário já existe", usuario })
    }
}

async function read_user(req: Request, res: Response) {
    try {
        const all_users = await Usuario.find({ eAdmin: false })
        return res.status(200).json(all_users)
    } catch (error) {
        return res.status(404).json(
            {
                message: "Lista vazia",
                error: error
            })
    }
}

async function only_user(req: Request, res: Response) {
    try {
        const id = req.params.id
        const user = await Usuario.find({ _id: id })
        return res.status(200).json(user)
    } catch (error) {
        return res.status(404).json(
            {
                message: "Usuario não encontrado",
                error: error
            })
    }
}

async function read_admin(req: Request, res: Response) {
    try {
        const all_users = await Usuario.find({ eAdmin: true })
        return res.status(200).json(all_users)
    } catch (error) {
        return res.status(404).json(
            {
                message: "Lista vazia",
                error: error
            })
    }
}

async function update(req: Request, res: Response) {
    const id = req.params.id

    // Encriptando a senha do usuario para salvar no bd
    const hash_pass1 = await hash(req.body.senha1_usuario, saltRounds)
    const hash_pass2 = await hash(req.body.senha2_usuario, saltRounds)

    try {
        const up_user = await Usuario.findByIdAndUpdate(
            id,
            {
                "nome_usuario": req.body.nome_usuario,
                "email_usuario": req.body.email_usuario,
                "senha1_usuario": hash_pass1,
                "senha2_usuario": hash_pass2,
                "eAdmin": req.body.eAdmin,
                // "status": req.body.status,
                // "confirmationCode": req.body.confirmationCode,
                "rua_usuario": req.body.rua_usuario,
                "bairro_usuario": req.body.bairro_usuario,
                "cidade_usuario": req.body.cidade_usuario,
                "estado_usuario": req.body.estado_usuario,
                "num_usuario": req.body.num_usuario,
                "cep_usuario": req.body.cep_usuario,
                "tipo_telefone": req.body.tipo_telefone,
                "numero_telefone1": req.body.numero_telefone1,
                "numero_telefone2": req.body.numero_telefone2,
            },
            {
                new: true
            }
        )
        return res.status(201).json(up_user)
    } catch (error) {
        return res.status(404).json(
            {
                mensagem: "Usuario não encontrado",
                error: error
            })
    }

}

async function delete_user(req: Request, res: Response) {
    const id = req.params.id
    const del_user = await Usuario.findByIdAndDelete(id)
    if (!del_user) return res.status(404).json({ message: "Usuario não encontrado", del_user })
    return res.status(201).json(del_user)
}

export { create, read_user, only_user, read_admin, update, delete_user }