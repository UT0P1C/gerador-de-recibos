const { Router } = require('express')
const reciboController = require('./controllers/reciboController')

const routes = new Router()

routes.get('/getRecibos', reciboController.getRecibo)

routes.post('/postRecibo', reciboController.postRecibo)

module.exports = routes
