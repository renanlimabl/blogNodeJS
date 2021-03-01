const express = require('express')
const router = express.Router()

router.get('/articles', (request, response) => {
  response.send('Rota de artigos')
})

router.get('/admin/articles/new', (request, response) => {
  response.send('Rota para criar nova artigos')
})

module.exports = router;