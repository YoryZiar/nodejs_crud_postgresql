const bookModel = require('../models/books.model');

exports.getBooks = (req, res) => {
    bookModel.findAll()
        .then( (result) => {
            res.status(200).json({
                data: result[0]
            })
        })
}

exports.addBook = (req, res) => {
    bookModel.create({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author
    })
    .then( result => {
        console.log('Add book successfully : ' + result);
        res.send(result)
    })
    .catch( err => {
        console.log('Add book error: ' + err);
    })
}

exports.updateBook = (req, res) => {
    bookModel.update({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author
    }, 
    {
        where: {
            book_id: req.params.id
        }
    })
    .then( result => {
        console.log('Update Book: ' + result[0] + 'success!' );
        res.send('Books updated!' + req.body);
    })
    .catch( err => {
        console.log('Update Book error: ' + err);
    })
}

exports.deleteBook = (req, res) => {
    bookModel.destroy({
        where: {
            book_id: req.params.id
        }
    })
    .then( result => {
        console.log('Delete Book: ' + result + 'success!' );
        res.send('Books delete!' + result);
    })
    .catch( err => {
        console.log('Delete Book error: ' + err);
    })
}