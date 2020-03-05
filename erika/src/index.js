const express = require('express');
const path = require('path');
const app = express();

app.engine('html', require('ejs').renderFile);

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

//Archivos Estaticos (CSS, JS, Imagenes)
app.use(express.static(__dirname + '/public'));

//routes
app.use(require('./routes/admin.js'));
app.use(require('./routes/login.js'));
app.use(require('./routes/mujer.js'));
app.use(require('./routes/hombre.js'));
app.use(require('./routes/contacto'));
app.use(require('./routes/informacion'));
app.use(require('./routes/ofertas'));
app.use(require('./routes/principal'));

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});