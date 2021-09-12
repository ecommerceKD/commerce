import { Router } from "express";
import login from "./login.router"
import categoria from "./categoria.router"

const routes = Router()

routes.use('/login', login)
routes.use('/categoria', categoria)

export default routes




