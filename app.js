require('dotenv').config();
const express = require('express')
const hbs = require('hbs');
const app = express();

const port = process.env.PORT;


//handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estatico
app.use(express.static('public'))

app.get('/', function(req, res){
    res.render('home',{
        nombre:'Rubis Rodriguez',
        titulo:'Curso de Node.js'
    });
});

app.get('/generic', function(req, res){
    res.render('generic',{
        nombre:'Rubis Rodriguez',
        titulo:'Curso de Node.js'
    });
});

app.get('/elements', function(req, res){
    res.render('elements',{
        nombre:'Rubis Rodriguez',
        titulo:'Curso de Node.js'
    });
});

app.get('/generic', function(req, res){
    res.sendFile(__dirname + '/public/generic.html')
});

app.get('/elements', function(req, res){
    res.sendFile(__dirname + '/public/elements.html')
});

app.get('*', function(req, res){
    res.sendFile(__dirname +'/public/404.html')
});

app.listen(port, () =>{
    console.log(`Exaple app listening at htpp://localhost:${port}`)
});
