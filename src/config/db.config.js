const { Sequelize } = require('sequelize');

// connecting to database
const sequelize = new Sequelize('simple_crud', 'root', '123', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize;