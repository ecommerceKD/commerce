import { Schema, model } from "mongoose"

interface UsuarioInterface {
    //Usuario
    nome_usuario: string,
    email_usuario: string,
    senha1_usuario: string,
    senha2_usuario: string,
    eAdmin: number,
    //Endereço
    rua_usuario: string,
    bairro_usuario: string,
    cidade_usuario: string,
    estado_usuario: string,
    num_usuario: number,
    cep_usuario: number,
    //Telefone
    tipo_telefone: string,
    numero_telefone1: number,
    numero_telefone2: number,
}

const schema = new Schema<UsuarioInterface>(
    {
        //Usuario
        nome_usuario: { type: String, required: true },
        email_usuario: { type: String, required: true },
        senha1_usuario: { type: String, required: true },
        senha2_usuario: { type: String, required: true },
        eAdmin: { type: Number, default: 0 },

        //Endereço
        rua_usuario: { type: String },
        bairro_usuario: { type: String },
        cidade_usuario: { type: String },
        estado_usuario: { type: String },
        num_usuario: { type: Number },
        cep_usuario: { type: Number },

        //Telefone
        tipo_telefone: { type: String, enum: ['Celular', 'Fixo'] },
        numero_telefone1: { type: Number },
        numero_telefone2: { type: Number }
    }
)

const UsuarioModel = model<UsuarioInterface>('Usuario', schema)

export default UsuarioModel