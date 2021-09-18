import { Router } from "express";
import passport from "passport"
import * as user from '../controllers/user.controller'

const userRouter = Router()

userRouter.get('/', passport.authenticate("local"), user.login)
userRouter.post('/', user.create)

export default userRouter