import { Router } from "express";
import { verifyJWT } from '../middleware'
import * as user from '../controllers/user.controller'

const user_router = Router()

user_router.get('/', user.read_user)
user_router.get('/admin', verifyJWT, user.read_admin)
user_router.post('/', user.create)
user_router.put('/:id', user.update)
user_router.delete('/:id', user.delete_user)

export default user_router