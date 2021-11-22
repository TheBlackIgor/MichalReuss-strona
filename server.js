const path = require('path');
const cookie = require('cookie-parser')
const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
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

app.use(cookieParser())
// set a cookie



app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
    app.use(express.static('static'))
})

app.get("/", function (req, res) {
    let theme = true
    if(req.cookies.theme == null){
        res.cookie("theme",true,{maxAge:2592000})         
    }else{
        theme = req.cookies.theme
    }    

    res.render('index.hbs', {variable: theme});
})

