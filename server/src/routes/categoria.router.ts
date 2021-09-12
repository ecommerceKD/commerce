import { Router } from "express";
import { create, index } from '../controllers/categoria.controller'
import { verifyJWT } from '../middleware'

const categoriaRouter = Router()

categoriaRouter.get('/', verifyJWT, index)
categoriaRouter.post('/post', verifyJWT, create)

export default categoriaRouter