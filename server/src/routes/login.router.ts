import { Router } from "express";
import * as login  from '../controllers/login.controller'

const loginRouter = Router()

loginRouter.get('/', login.login)
loginRouter.post('/', login.create)

export default loginRouter