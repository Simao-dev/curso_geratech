//Criando rotas privadas

const express = require('express');
const jwt = require('jsonwebtoken')
const UsuariosRotas =  require ('./UsuariosRotas');
const PostsRotas =  require ('./PostsRotas')
require('dotenv').config()
const RotasPrivadas = express.Router();


//Middleware / Verifica se o token e valido para permitir o acesso
RotasPrivadas.use((request, response, next) => {

    let auth = false

    if (request.headers.token) {
        const { token } = request.headers;

        try {
            jwt.verify(token, process.env.APP_KAY_TOKEN);
            auth = true;
        }catch(e) {
            return  response.status(403).send(e);

        }
    }
    
    if (auth === false) {
        return  response.status(403).send("Não Autorizado");
    }
    
    next();

});

RotasPrivadas.use(UsuariosRotas);
RotasPrivadas.use(PostsRotas);
module.exports = RotasPrivadas;