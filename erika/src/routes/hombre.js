const express = require('express');
const path = require('path');
const ruta = express.Router();
const pool = require('../controller/index');//conexion base de datos


ruta.get('/Hombre', async function(req, res) {
    res.render('hombre.html');
})

module.exports = ruta;