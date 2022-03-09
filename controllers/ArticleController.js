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
        const article = await ArticleModel.findOne({ _id: articleID })

        if(!article) {
            res.status(404).json({ message: 'Artigo não encontrado' })

            return
        }

        res.status(200).json({article})
    } catch(error) {
        res.status(500).json({ message: 'Ops! Algum erro ocorreu no servidor.' })

        console.log('Um erro ocorreu, código: ', error)
    }
}

exports.createArticle = async(req, res) => {
    const {featured, title, url, imageUrl, newsSite,
    summary, publishedAt, launches, events} = req.body

    const Article = {
        featured,
        title,
        url,
        imageUrl,
        newsSite,
        summary,
        publishedAt,
        launches,
        events
    }

    if(!featured) {
        res.status(422).json({ erro: 'Você precisa definir se o artigo é um destaque!' })
    } else if(!title) {
        res.status(422).json({ erro: 'Você precisa definir um titulo para a notícia.' })
    } else if(!url) {
        res.status(422).json({ erro: 'Você precisa colocar a url da noticia.' })
    } else if(!imageUrl) {
        res.status(422).json({ erro: 'A notícia precisa ter uma imagem.' })
    } else if(!newsSite) {
        res.status(422).json({ erro: 'Você precisa informar o site da noticia.' })
    } else if(!summary) {
        res.status(422).json({ erro: 'A noticia precisa ter um sumário!'})
    } else if(!publishedAt) {
        res.status(422).json({ erro: 'Você precisa informar a data da publicação da noticia.'})
    } 
}