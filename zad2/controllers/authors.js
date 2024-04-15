const Author = require('../models/author');

const authors = [
  new Author(1, 'A1')
];

exports.renderAuthors = (req, res) => {
  res.render('authors', { authors: authors.length > 0 ? authors : null 
})};