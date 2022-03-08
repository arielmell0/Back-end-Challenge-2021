const mongoose = require('mongoose')

const ArticleModel = mongoose.model('Article', {
    featured: Boolean,
    title: String,
    url: String,
    imageUrl:String,
    newSite: String,
    summary: String,
    publishedAt: String,
    launches: [
        {
            id: String,
            provider: String
        }
    ],
    events: [
        {
            id: String,
            provider: String
        }
    ]
})

module.exports = ArticleModel