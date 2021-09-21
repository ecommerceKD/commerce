import { compareSync } from 'bcrypt'
import { Strategy } from 'passport-local'
import Usuario from "../models/usuario.model"

interface PassportInterface {
    serializeUser: (arg0: (email: any, done: (arg0: any, arg1: any) => void) => void) => void

    deserializeUser: (arg0: (id: any, done: any) => Promise<void>) => void
    
    use: (arg0: Strategy) => void
}

export default function (passport: PassportInterface) {

    passport.serializeUser((email: any, done: (arg0: any, arg1: any) => void) => {
        done(null, email);
    });

    passport.deserializeUser(async (id: any, done) => {
        try {
            const user = await Usuario.findById(id);
            done(null, user);
        } catch (err) {
            done(err, null);
        }
    });

    passport.use(new Strategy({
        usernameField: 'email',
        passwordField: 'password'
    },
        async (email, password, done) => {
            try {
                const user = await Usuario.find({ "email_usuario": email })

                // usuário inexistente
                if (user.length <= 0) { return done(null, false) }

                // comparando as senhas
                const isValid = compareSync(password, user[0].senha1_usuario);
                if (!isValid) return done(null, false)

                return done(null, email)
            } catch (err) {
                done(err, false);
            }
        }
    ));
}