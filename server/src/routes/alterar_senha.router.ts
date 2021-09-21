import { Router } from "express";
import { update } from '../controllers/user.controller'
import { email_pass } from '../controllers/email_pass.controller'

const alterar_senha_router = Router()

alterar_senha_router.post("/email/:id", email_pass)
alterar_senha_router.post('/:id', update)

export default alterar_senha_router