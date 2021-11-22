const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');
const app = express();
const PORT = 5000;

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

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
    app.use(express.static('static'))
})

app.get("/", function (req, res) {
    res.render('index.hbs');
})

