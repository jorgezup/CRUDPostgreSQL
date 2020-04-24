/* Rotas de Acesso da aplicação */
const express = require('express')
routes = express.Router()

const UserController = require('../app/controller/UserController.js')

routes.get('/users', UserController.index)
routes.post('/users', UserController.post)
routes.get('/users/:id', UserController.show)
routes.put('/users/:id', UserController.put)
routes.delete('/users/:id', UserController.delete)

module.exports = routes