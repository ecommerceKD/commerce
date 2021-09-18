import { Router } from "express";
import user from "./user.router"
import categoria from "./categoria.router"

const routes = Router()

routes.use('/login', user)
routes.use('/categoria', categoria)

export default routes