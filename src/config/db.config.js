require('dotenv').config();
const { Sequelize } = require('sequelize');

// connecting to database
const sequelize = new Sequelize(
    process.env.DB_NAME || 'simple_crud', 
    process.env.DB_USER || 'root', 
    process.env.DB_PASSWORD || '123', 
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres'
    }
);

module.exports = sequelize;