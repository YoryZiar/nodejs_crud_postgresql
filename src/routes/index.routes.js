const router = require('express').Router();
const bookController = require('../controller/index.controller');

// Routes
router.get('/book', bookController.getBooks);
router.post('/add-book', bookController.addBook);
router.put('/update-book/:id', bookController.updateBook);
router.delete('/del-book/:id', bookController.deleteBook);

// exports
module.exports = router;