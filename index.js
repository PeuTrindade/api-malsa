const express = require('express');
const morgan = require('morgan');
const app = express();
const routes = require('./config/routes');

const PORT = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

app.listen(PORT,() => {
    console.log(`Servidor rodando na porta ${PORT}`);
});