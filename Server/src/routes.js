const { Router } = require('express')

const routes = new Router()

routes.get('/', (req, res) => {
  res.send('hello ye')
})

module.exports = routes
