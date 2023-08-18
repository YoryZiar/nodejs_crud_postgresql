const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

// Models
const Book = sequelize.define('Book', {
    book_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    author: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Book;