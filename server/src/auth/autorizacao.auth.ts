import Usuario from '../models/usuario.model'


async function handleAuth(email: string, password: string): Promise<string> {
    const user_db = await Usuario.find({ "email_usuario": email })
    const pass_db = user_db[0].senha1_usuario // desencriptar com o bcrypt
    
    if (user_db && (pass_db === password)) {
        const id = user_db[0].id
        console.error(id)
        return id
    }

    return null
}

export { handleAuth }