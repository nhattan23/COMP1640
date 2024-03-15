//import
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// Cấu hình Express để phục vụ các tệp tĩnh từ thư mục public
app.use(express.static(path.join(__dirname, 'public')));
// database
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true,} );
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to database'));

// middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(session({
    secret: 'my secret key',
    saveUninitialized: true,
    resave: false,

}))

app.use((req, res, next) => {
    res.locals.message  = req.session.message;
    delete req.session.message;
    next();
})

// Use Uploads Folder
app.use(express.static('Uploads'));

//set template engine
app.set("view engine", "ejs");

// app.get('/', (req, res) =>{
//     res.send('Hello Word');
// })

// route prefix
app.use("", require("./Routes/routes"))

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});