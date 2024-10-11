const newsModel = require('../models/newsModel')

const validateNews = async(request, response) => {
    const givenTitle = request.body.title

    try
    {
        const validTitle = await newsModel.findOne({title : givenTitle})
        if(validTitle)
        {
            return response.status(200).json(validTitle)
        }
        return response.status(400).send({message: `Invalid Title!!`})
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
}

module.exports = {validateNews}