//CRUD Functionality
const Book = require('../models/book')
const {StatusCodes}= require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')


const getAllBooks = async(req, res) =>{
    const books = await Book.find({createdBy:req.user.userId}).sort('createdAt')
    res.status(StatusCodes.OK).json({books, count: books.length })
}

const getBook=  async(req, res) =>{
    res.send('get book')
}

const createBook=  async(req, res) =>{
    req.body.createdBy = req.user.userId
    const book = await Book.create(req.body)
    res.status(StatusCodes.CREATED).json({ book })
}

const updateBookList=  async(req, res) =>{
    res.send('update book list')
}

const deleteBook=  async(req, res) =>{
    res.send('delete book')
}



module.exports = {
    getAllBooks,
    getBook,
    createBook,
    updateBookList,
    deleteBook,
    
}