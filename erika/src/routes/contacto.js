const express = require('express');
const path = require('path');
const ruta = express.Router();
const pool = require('../controller/index');//conexion base de datos


ruta.get('/Contacto', async function(req, res) {
    res.render('contact.html');
})

module.exports = ruta;