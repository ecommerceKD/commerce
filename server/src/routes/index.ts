import { Router } from "express";
import login_user from "./login.user.router"
import login_admin from "./login.admin.router"
import user from "./user.router"
import categoria from "./categoria.router"
import verify_email from "./email.router";

const routes = Router()

routes.use('/admin', login_admin)
routes.use('/login', login_user)
routes.use('/confirme', verify_email)
routes.use('/user', user)
routes.use('/categoria', categoria)

export default routes