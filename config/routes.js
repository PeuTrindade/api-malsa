const express = require('express');
const routes = express.Router();


routes.get('/imoveis',(req,res) => {
    return res.json(db);
});

module.exports = routes;