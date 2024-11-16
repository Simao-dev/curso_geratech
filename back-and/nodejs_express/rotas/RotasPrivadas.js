//Criando rotas privadas

const express = require('express');
const UsuariosRotas =  require ('./UsuariosRotas');
const PostsRotas =  require ('./PostsRotas')

const RotasPrivadas = express.Router();


//Middleware / Verifica se o token e valido para permitir o acesso
RotasPrivadas.use((request, response, next) => {

    if (request.headers.token !== 'ANDjjshreksmcmcJS5645') {
        return  response.status(403).send("Não Autorizado");
    }
    
    next();

});

RotasPrivadas.use(UsuariosRotas);
RotasPrivadas.use(PostsRotas);

module.exports = RotasPrivadas;