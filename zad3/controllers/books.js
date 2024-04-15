const Book = require('../models/book');

const book = [
    new Book(1, 'B1', 1980, 1)
];
exports.renderBooks = (req, res) => {
    res.render('book', { book: book.length > 0 ? book : null 
    })};