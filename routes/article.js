const router = require('express').Router()

const ArticleController = require('../controllers/ArticleController')

router.get('/articles', ArticleController.getArticles)

module.exports = router