const express = require('express');
const path = require('path');
const ruta = express.Router();
const pool = require('../controller/index');//conexion base de datos


ruta.get('/Admin', async function(req, res) {
//    console.log(req.body);
    const resul = await pool.query('SELECT * FROM producto');
  //  console.log(resul.rows[0]['nombre']);
    res.render('productos.html',{resul});
});



ruta.post('/Admin_Index', async (req, res)=>{
    res.send(req.body);
});

module.exports = ruta;