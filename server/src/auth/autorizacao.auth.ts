import { compareSync } from 'bcrypt'
import Usuario from '../models/usuario.model'


async function handleAuth(email: string, password: string): Promise<string> {
    const user_db = await Usuario.find({ "email_usuario": email })
    if (user_db.length <= 0) return null;

    const verifyPass = await compareSync(password, user_db[0].senha1_usuario)

    if (verifyPass) {
        const id = user_db[0].id
        return id
    }

    return null
}

export { handleAuth }