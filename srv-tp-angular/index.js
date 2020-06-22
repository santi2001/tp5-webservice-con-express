var express = require('express');
var app = express();

const {mongoose} = require('./database')
const cors = require('cors');

//middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Cargamos el modulo de direccionamiento de rutas para puntos
app.use('/api/punto1', require('./routes/punto1.route'));
app.use('/api/punto2', require('./routes/punto2.route'));
app.use('/api/empresa', require('./routes/empresa.route'));
app.use('/api/punto4', require('./routes/punto4.route'));
app.use('/api/punto3', require('./routes/punto3.route'));
//app.use('/api/sectores', require('./routes/sectores.route'));

//setting
app.set('port', process.env.PORT || 3000);

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server started on port`, app.get('port'));
});