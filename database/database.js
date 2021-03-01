const Sequelize = require('sequelize')

const connection = new Sequelize('blog', 'root', '20193710', {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = connection