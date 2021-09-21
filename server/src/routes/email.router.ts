import { Router } from "express";
import { verify_email } from "../controllers/verify_email.controller"

const verify_email_router = Router()


verify_email_router.get('/:confirmationCode', verify_email)

export default verify_email_router