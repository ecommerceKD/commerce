import { Router } from "express";
import { update } from '../controllers/user.controller'
import { email_pass } from '../controllers/email_pass.controller'

const alterar_senha_router = Router()

//Vai enviar o email para usuario
//Chamar essa rota no botão de alterar senha no Front-end
alterar_senha_router.post("/email/:id", email_pass) 

//Vai alterar a senha no backend
//Tentar melhorar essa rota
//Tem que mandar todos os dados do usuario para poder mudar só a senha
//Tentar aprimorar isso para enviar apenas a senha
alterar_senha_router.post('/:id', update)

export default alterar_senha_router