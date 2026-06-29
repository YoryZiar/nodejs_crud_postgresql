const bookModel = require('../models/books.model');

exports.getBooks = async (req, res) => {
    try {
        const result = await bookModel.findAll();
        res.status(200).json({
            data: result
        });
    } catch (err) {
        console.error('Get books error: ', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.addBook = async (req, res) => {
    try {
        const result = await bookModel.create({
            title: req.body.title,
            description: req.body.description,
            author: req.body.author
        });
        console.log('Add book successfully : ' + result);
        res.send(result);
    } catch (err) {
        console.error('Add book error: ', err);
        res.status(500).json({ error: 'Failed to add book' });
    }
}

exports.updateBook = async (req, res) => {
    try {
        const result = await bookModel.update({
            title: req.body.title,
            description: req.body.description,
            author: req.body.author
        }, 
        {
            where: {
                book_id: req.params.id
            }
        });
        console.log('Update Book: ' + result[0] + ' success!');
        res.send('Books updated! ' + JSON.stringify(req.body));
    } catch (err) {
        console.error('Update Book error: ', err);
        res.status(500).json({ error: 'Failed to update book' });
    }
}

exports.deleteBook = async (req, res) => {
    try {
        const result = await bookModel.destroy({
            where: {
                book_id: req.params.id
            }
        });
        console.log('Delete Book: ' + result + ' success!');
        res.send('Books deleted! ' + result);
    } catch (err) {
        console.error('Delete Book error: ', err);
        res.status(500).json({ error: 'Failed to delete book' });
    }
}