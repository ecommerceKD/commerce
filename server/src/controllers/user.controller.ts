import { Request, Response } from 'express'
import { hash } from "bcrypt"
import Usuario from '../models/usuario.model'
const saltRounds = 10

async function create(req: Request, res: Response) {
    // Verificando se o usuário existe no bd
    let usuario = await Usuario.findOne({ "email_usuario": req.body.email_usuario })

    // Encriptando a senha do usuario para salvar no bd
    const hash_pass1 = await hash(req.body.senha1_usuario, saltRounds)
    const hash_pass2 = await hash(req.body.senha2_usuario, saltRounds)

    if (!usuario) {
        const data = {
            "nome_usuario": req.body.nome_usuario,
            "email_usuario": req.body.email_usuario,
            "senha1_usuario": hash_pass1,
            "senha2_usuario": hash_pass2,
            "eAdmin": req.body.eAdmin,
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
        return res.status(201).json(usuario)
    } else {
        return res.status(500).json({ mensagem: "Usuário já existe", usuario })
    }
}

async function read(req: Request, res: Response) {
    const All_Users = await Usuario.find()
    if (All_Users.length > 0) return res.status(200).json(All_Users)
    return res.status(204)
}

async function update(req: Request, res: Response) {
    const id = req.params.id

    // Encriptando a senha do usuario para salvar no bd
    const hash_pass1 = await hash(req.body.senha1_usuario, saltRounds)
    const hash_pass2 = await hash(req.body.senha2_usuario, saltRounds)


    Usuario.findByIdAndUpdate(id,
        {
            "nome_usuario": req.body.nome_usuario,
            "email_usuario": req.body.email_usuario,
            "senha1_usuario": hash_pass1,
            "senha2_usuario": hash_pass2,
            "eAdmin": req.body.eAdmin,
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
        (err: any, result: any) => {
            if (err) return res.status(404).send(err)

            res.send(result)
        }
    )
}

export { create, read, update }