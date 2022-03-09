const ArticleModel = require('../models/ArticleModel')

exports.getArticles = async(req, res) => {
    try {
        const article = await ArticleModel.find()

        res.status(200).json(article)
    } catch(error) {
        res.status(500).json({ message: 'Ops, algum erro ocorreu.'})
    }
}

exports.getArticleByID = async(req, res) => {
    const articleID = req.params.id

    try {
        const article = await ArticleModel.findById(articleID)

        res.status(200).json({article})
    } catch(error) {
        res.status(500).json({ message: 'Ops! Algum erro ocorreu.' })

        console.log('Um erro ocorreu, código: ', error)
    }
}