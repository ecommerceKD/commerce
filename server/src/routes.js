const express = require('express');
const routes = express.Router();

const Categoria = require('./controllers/categorias.controller')


// ROTAS CATEGORIAS
routes.get('/api/categorias', Categoria.index);
routes.post('/api/categorias', Categoria.create);

module.exports = routes;