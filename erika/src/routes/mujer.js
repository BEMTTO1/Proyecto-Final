const express = require('express');
const path = require('path');
const ruta = express.Router();
const pool = require('../controller/index');//conexion base de datos


ruta.get('/Mujer', async function(req, res) {
    res.render('mujer.html');
})

module.exports = ruta;