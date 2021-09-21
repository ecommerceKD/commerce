
//Renomeie este arquivo para "smtp.config.ts"

const host: string = ''//Endereço do Host
const user: string = ''//Endereço de email
const pass: string = ''//Senha do email
const port: number = 111 //Porta do email 
const secure: boolean = false //Segurança TRUE ou FAlSE

export const smtp = {
    host: host,
    port: port,
    secure: secure,
    logger: true,
    debug: true,
    auth: {
        user: user,
        pass: pass,
    },
    tls: {
        rejectUnauthorized: false
    }
}