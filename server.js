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
    res.send('Get yer charts here!');
});

app.listen(port, function() {
    console.log('charts-fun is running')
    console.log('listening on port', port)
})