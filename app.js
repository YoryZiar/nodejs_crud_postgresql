const express = require('express');
const app = express();
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session')

// port
const port = 3000;

// setup express
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: false
    })
)

// database
const sequelize = require('./src/config/db.config');
sequelize.authenticate()
    .then(() => {
        console.log('Koneksi ke database berhasil');
    })
    .catch((err) => {
        console.log('Koneksi ke database gagal: ' + err);
    })

// routes
app.use('/', require('./src/routes/index.routes'))



// server 
app.listen(port, () => {
    console.log(`app running on port || ${port}`);
})