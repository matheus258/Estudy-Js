const express = require('express')
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController')

// Rota Home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

// Rota contato
route.get('/contato', contatoController.paginaContato )

module.exports = route;