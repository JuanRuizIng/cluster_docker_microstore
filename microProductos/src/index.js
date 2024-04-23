const express = require('express');
const productosController = require('./controllers/productosController');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(productosController);
app.listen(3006, () => {
    console.log('Microservicio Productos con docker swarm ejecutandose en el puerto 3006');
});