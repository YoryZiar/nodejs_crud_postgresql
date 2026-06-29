require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// port
const port = process.env.PORT || 3000;

// setup express
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Added to parse JSON body
app.use(cookieParser());
app.use(
    session({
        secret: process.env.SESSION_SECRET || 'fallback_secret_key_change_me',
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        }
    })
);

// database
const sequelize = require('./src/config/db.config');
sequelize.authenticate()
    .then(() => {
        console.log('Koneksi ke database berhasil');
    })
    .catch((err) => {
        console.error('Koneksi ke database gagal: ', err);
    });

// routes
app.use('/', require('./src/routes/index.routes'));

// server 
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});