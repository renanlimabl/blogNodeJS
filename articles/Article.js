const Sequelize = require('sequelize')
const connection = require('../database/database')
const Category = require('../categories/Category')

const Article = connection.define('articles', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

// 1 - p - N (hasMany)
Category.hasMany(Article) // 1 categoria - N artigos
// 1 - p - 1 (belongsTo)
Article.belongsTo(Category) // 1 artigo - 1 categoria

// Article.sync({ force: true })

module.exports = Article