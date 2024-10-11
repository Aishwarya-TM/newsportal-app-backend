const express = require('express')
const router = express.Router()
const {getAllNews, addNewNews, updateNews, deleteNews} = require('../controllers/newsController')
const {validateNews} = require('../controllers/validateController')

router.route('/').post(addNewNews).get(getAllNews).patch(updateNews).delete(deleteNews)
router.route('/validate').post(validateNews)

module.exports = router