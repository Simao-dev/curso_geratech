//Criando rotas Publicas

const express = require('express');
const jwt = require('jsonwebtoken')
require('dotenv').config()
const AuthController = require('../controllers/AuthController')

const RotasPublicas = express.Router();

//Checagem de login e senha

RotasPublicas.post('/login', (request, response) => {
    const body = request.body;
    const auth = new AuthController();
    const dados = auth.login(body.login, body.senha);
    if(dados) {
        const token = jwt.sign(dados, process.env.APP_KAY_TOKEN)
        return response.json({
            token: token
        })
    }
    return response.json({
        message:"Login ou senha incorreto"
    })
});



module.exports = RotasPublicas;