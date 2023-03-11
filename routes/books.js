const express =  require('express')
const router = express.Router()

//All of the CRUD functionality coming from the controllers
const {getAllBooks,
    getBook,
    createBook,
    updateBookList,
    deleteBook,} = require('../controllers/books')

//Now we have to do router.route and have post and get on a forward slash

router.route('/').post(createBook).get(getAllBooks)
router.route('/:id').get(getBook).delete(deleteBook).patch(updateBookList)

module.exports = router