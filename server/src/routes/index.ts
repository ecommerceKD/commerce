import { Router } from "express";
import login from "./login.router"
import user from "./user.router"
import categoria from "./categoria.router"

const routes = Router()

routes.use('/login', login)
routes.use('/user', user)
routes.use('/categoria', categoria)

export default routes