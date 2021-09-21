import { createTransport } from 'nodemailer'
import { smtp } from './smtp.config'

const transport = createTransport(smtp)

transport.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Servidor EMAIL conectado");
    }
});

async function send_email(email: string, name: string, link_code: string, body: Function) {
    transport.sendMail({
        from: "UMBU STORE <umbustores@gmail.com>",
        to: email,
        subject: "UMBU STORE",
        html: body(name, link_code)
    })
    console.log('Email enviado!')
}

export { send_email }