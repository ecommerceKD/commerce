const express = require('express');
const routes = express.Router();

// ROTAS ADMIN
routes.get('/teste', (req, res) => {
    res.json({message: 'Home Usuário'})
})

routes.get('/produtos', (req, res) => {
    res.json({message: 'Home Produtos'})
})

// ROTAS USUÁRIOS

module.exports = routes;