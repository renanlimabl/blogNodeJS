const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
  response.send('Rota de categorias')
})

router.get('/admin/categories/new', (request, response) => {
  response.send('Rota para criar nova categoria')
})

module.exports = router;