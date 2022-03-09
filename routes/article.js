const router = require('express').Router()

const ArticleController = require('../controllers/ArticleController')

router.get('/articles', ArticleController.getArticles)
router.get('/articles/:id', ArticleController.getArticleByID)

module.exports = router