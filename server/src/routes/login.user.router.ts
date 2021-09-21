import { Router } from "express";
import passport from "passport"
import { login_user } from "../controllers/login.controller"
import { verifyActiveAccount } from '../middleware'

const login_user_router = Router()


login_user_router.post('/',
    passport.authenticate("local"),
    verifyActiveAccount,
    login_user
)

export default login_user_router