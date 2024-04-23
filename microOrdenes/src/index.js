const express = require('express');
const ordenesController = require('./controllers/ordenesController');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(ordenesController);
app.listen(3008, () => {
    console.log('Microservicio de ordenes con docker swarm escuchando en el puerto 3008');
});
