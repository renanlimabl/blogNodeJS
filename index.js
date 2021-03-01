const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const connection = require('./database/database')

const categoriesController = require('./categories/CategoriesController')
const articlesController = require('./articles/ArticlesController')


// View Engine
app.set('view engine', 'ejs')

// Static
app.use(express.static('public'))

// Body parser
app.use(bodyParser.urlencoded({extended: false}))

// Express
app.use(express.json())

// Database
connection
  .authenticate()
  .then(() => {
    console.log('Conexão feita com sucesso')
  })
  .catch((error) => {
    console.log(error)
  })


app.use('/', categoriesController)
app.use('/', articlesController)

app.get('/', (request, response) => {
  response.render('index')
})

app.listen(3000, () => {
  console.log('O servidor está rodando')
})