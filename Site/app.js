const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const app = express();

app.listen(3000, () => {
    console.log('foi');
});

app.get('/', (req, res)=>{
    res.send('index')
})