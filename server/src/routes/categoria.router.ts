import { Router } from "express";
import { create, index } from '../controllers/categoria.controller'
import { verifyJWT } from '../middleware'

const categoria_router = Router()

categoria_router.get('/', verifyJWT, index)
categoria_router.post('/', verifyJWT, create)

export default categoria_router