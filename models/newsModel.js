const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : true
        },
        author : {
            type : String,
            required : true
        },
        date : {
            type : String,
            required : true
        },
        content : {
            type : String,
            required : true,
        },
        category : {
            type : String,
            required : true
        },
        genre : {
            type : String,
            required : true
        }
    },
    {
        collection : 'news'
    }
)
module.exports = mongoose.model('news', newsSchema)