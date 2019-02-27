require('dotenv').config();
const express = require('express');
const db = require('./models');
const layouts = require('express-ejs-layouts');

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(layouts);
app.use(express.urlencoded({extended: false}))
app.use(express.static('static'));

app.get('/', function(req,res) {
    db.poll.aggregate('survey', 'DISTINCT', {plain:false})
    .then(surveys => {
        res.render('index', {surveys})
    })
});

app.post('/', function(req,res) {
    db.poll.create({
        name: req.body.name,
        answer: req.body.answer,
        survey: req.body.survey
    }).then(poll => {
        res.redirect('/')
    })
})

app.get('/new', (req,res) => {
    res.render('new')
})

app.get('/detail/:id', (req,res) => {
    db.poll.findAll({
        where:{survey: req.params.id}
    }).then(data => {
        res.render('show', {data})
    })
})

app.listen(port, function() {
    console.log('charts-fun is running')
    console.log('listening on port', port)
})