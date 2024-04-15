const express = require('express');
const router = express.Router();

const booksController = require('../controllers/books');

router.get('/list', booksController.renderBooks);

module.exports = router;