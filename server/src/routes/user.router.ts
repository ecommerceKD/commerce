import { Router } from "express";
import * as user from '../controllers/user.controller'

const userRouter = Router()

userRouter.get('/', user.read)
userRouter.post('/', user.create)
userRouter.put('/:id', user.update)

export default userRouter