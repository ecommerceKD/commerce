import { createTransport } from 'nodemailer'
import { smtp } from './smtp.config'
import { body_email } from './body_email.config'

const transport = createTransport(smtp)

transport.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Servidor EMAIL conectado");
    }
});

async function send_confirm_email(email: string, name: string, confirmationCode: string) {
    transport.sendMail({
        from: "UMBU STORE <umbustores@gmail.com>",
        to: email,
        subject: "UMBU STORE",
        html: body_email(name, confirmationCode)
    })
    console.log('Email enviado!')
}

export { send_confirm_email }