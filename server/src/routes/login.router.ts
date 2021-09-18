import { Router } from "express";
import passport from "passport"
import login from "../controllers/login.controller"

const loginRouter = Router()


loginRouter.get('/', passport.authenticate("local"), login)

export default loginRouter