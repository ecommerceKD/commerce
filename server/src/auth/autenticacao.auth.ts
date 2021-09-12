import { sign } from 'jsonwebtoken'
import { handleAuth } from './autorizacao.auth'

async function handlerAuthentication(user: string, password: string): Promise<string> {
    const id = await handleAuth(user, password)

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

export { handlerAuthentication }