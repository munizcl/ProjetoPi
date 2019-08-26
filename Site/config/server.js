const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('./app/public'));
app.set('engine view', 'ejs');
app.set('views', './app/views');

consign()
    .include('./app/routes')
    .then('./config/conection.js')
    .then('./app/models')
    .then('./app/controllers').into(app);
    

module.exports = app;