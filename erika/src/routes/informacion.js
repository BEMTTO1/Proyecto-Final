const express = require('express');
const path = require('path');
const ruta = express.Router();
const pool = require('../controller/index');//conexion base de datos


ruta.get('/Informacion', async function(req, res) {
    res.render('about-us.html');
})

module.exports = ruta;