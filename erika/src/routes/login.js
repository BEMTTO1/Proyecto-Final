const express = require('express');
const path = require('path');
const ruta = express.Router();

ruta.get('/', function(req, res) {
    res.render('index.html');
});

module.exports = ruta;