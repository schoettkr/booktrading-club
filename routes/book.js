const express = require('express');
const Router = express.Router();
const BooksController = require('../controllers/BooksController');

Router.get('/books/:userId' , BooksController.booksByUser);

Router.get('/books' , BooksController.allBooks);

Router.post('/addBook', BooksController.addBook);

Router.post('/requestTrade', BooksController.requestTrade);

Router.delete('/book/:bookId', BooksController.deleteBook);

Router.post('/searchBook', BooksController.searchBook);

Router.patch('/trade', BooksController.trade);

Router.patch('/trade/decline', BooksController.decline);

Router.patch('/trade/cancel', BooksController.cancel);

module.exports = Router;
