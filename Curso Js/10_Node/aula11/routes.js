const express = require('express')
const route = express.Router();
// Import Controllers
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');
const formularioController = require('./src/controllers/formularioController')

// Rota Home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

// Rota contato
route.get('/contato', contatoController.paginaContato )

// Rota Formulario
route.get('/formulario', formularioController.formulario)
route.post('/formularioo', formularioController.trataFormulario)

module.exports = route;