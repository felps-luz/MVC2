const express = require('express');
const Calculadora = require('../model/calculo');
const resultado = express.Router();

resultado.post('/',(req,res) => {
    const{valor1,valor2} = req.body;
    const volume = Calculadora.Volume(parseFloat(valor1), parseFloat(valor2));
    res.send(`O volume é: ${volume}`);
});

module.exports = resultado;