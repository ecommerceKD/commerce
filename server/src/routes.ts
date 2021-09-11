import express from "express";
import { create, index } from './controllers/categoria.controller'

const routes = express.Router()

routes.get('/api/categoria', index)
routes.post('/api/categoria', create)

export default routes
