const express = require('express');
const routes = express.Router();

// ROTAS ADMIN
routes.get('/teste', (req, res) => {
    res.json({message: 'Home Usuário'})
})

// ROTAS USUÁRIOS

module.exports = routes;