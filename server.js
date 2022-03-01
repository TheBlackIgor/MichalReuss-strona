const path = require('path');
const cookie = require('cookie-parser')
const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const fs = require('fs')
const data = require('./static/gfx/gfx.json')

app.use(express.static('static'))

var bgImages = fs.readdirSync('./static/gfx/main-bg/');
var gallery = fs.readdirSync('./static/gfx/gallery/')

app.set('view engine', 'hbs');
app.use(express.urlencoded({
    extended: true
}));
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs({
    extname: '.hbs',
    defaultLayout: 'main.hbs',
    partialsDir: path.join(__dirname, 'views/partials'),
    helpers: {
        helper() {

        },
    }
}));

app.use(cookieParser())

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
    app.use(express.static('static'))
})

app.get("/", function (req, res) {

    if (req.cookies.theme == null) {
        theme = true
        res.cookie("theme", true, { maxAge: 24920000 })
    } else {
        theme = req.cookies.theme
    }
    res.render('index.hbs', { theme, bgImages });
})
app.get("/gallery", function (req, res) {
    let theme;
    if (req.cookies.theme == null) {
        theme = true
        res.cookie("theme", true, { maxAge: 24920000 })
    } else {
        theme = req.cookies.theme
    }
    res.render('galeria.hbs', { theme, gallery: data.gallery });
})

app.get("/aboutMe", function (req, res) {
    let theme;
    if (req.cookies.theme == null) {
        theme = true
        res.cookie("theme", true, { maxAge: 24920000 })
    } else {
        theme = req.cookies.theme
    }
    res.render('oMnie.hbs', { theme });
})

app.get("/:session", function (req, res) {
    let theme;
    const session = req.params.session
    if (req.cookies.theme == null) {
        theme = true
        res.cookie("theme", true, { maxAge: 24920000 })
    } else {
        theme = req.cookies.theme
    }
    var photos = fs.readdirSync('./static/gfx/gallery/' + session)

    console.log(session)

    res.render('session.hbs', { theme, photos: photos, title: session });
})

//  npm install express
//  npm install express-handlebars@5.3.5
//  npm install cookie-parser 

