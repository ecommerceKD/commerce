import { Router } from "express";
import passport from "passport"
import { login_admin } from "../controllers/login.controller"

const login_admin_router = Router()


login_admin_router.post('/', passport.authenticate("local"), login_admin)

export default login_admin_router