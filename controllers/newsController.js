const newsModel = require('../models/newsModel')
const initialData = require('../data/initialData')

const getAllNews = async(request, response) =>
{
    try{
        const news = await newsModel.find()
        if(news.length === 0)
        {
            const initialNews = await newsModel.insertMany(initialData)
        }
        return response.status(200).json(news)
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
}

const addNewNews = async(request, response) => {
    const newsToBeAdded = request.body

    try
    {
        const existingNews = await newsModel.findOne({title : newsToBeAdded.title})
        if(existingNews)
        {
            return response.status(409).send({message: `The news with title ${newsToBeAdded.title} already exists`})
        }
        const insertedNews = await newsModel.create(newsToBeAdded)
        response.status(201).json(insertedNews)
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
}

const updateNews = async(request, response) => {
    const newsToBeUpdated = request.body

    try
    {
        const updatedNews = await newsModel.updateMany({title : newsToBeUpdated.title}, newsToBeUpdated)
        response.status(200).json(updatedNews)
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
}

const deleteNews = async(request, response) => {
    const newsToBeDeleted = request.body

    try
    {
        const deletedNews = await newsModel.deleteOne({title : newsToBeDeleted.title})
        response.status(200).json(deletedNews)
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
}

module.exports = {getAllNews, addNewNews, updateNews, deleteNews}