import { Router } from "express";
import login  from '../controllers/login.controller'

const loginRouter = Router()

loginRouter.get('/', login)


export default loginRouter