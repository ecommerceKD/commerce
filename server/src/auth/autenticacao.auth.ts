import { sign } from 'jsonwebtoken'
import { handle_auth_user, handle_auth_admin } from './autorizacao.auth'

async function handler_authentication_user(email: string, password: string): Promise<string> {
    const id = await handle_auth_user(email, password) //verifica se o usuário existe e valida a senha

    if (id) {
        const token = sign(
            { id },
            process.env.JWT_SECRET,
            { expiresIn: 300 }// expires in 5min
        )
        return token
    }
    return null
}

async function handler_authentication_admin(email: string, password: string): Promise<string> {
    const id = await handle_auth_admin(email, password) //verifica se o admin existe, se é um admin e valida a senha
    
    if (id) {
        const token = sign(
            { id },
            process.env.JWT_SECRET,
            { expiresIn: 300 }// expires in 5min
        )
        return token
    }
    return null
}

export { handler_authentication_user, handler_authentication_admin }