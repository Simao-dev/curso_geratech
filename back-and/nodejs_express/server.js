const express = require('express');
const UsuariosRotas = require('./rotas/UsuariosRotas');
const PostsRotas = require('./rotas/PostsRotas');

const host = "localhost"
const port = 3000;

const app = express()
app.use(express.json())

app.get('/', (request, response) => {
    return response.send("Ola, eu sou um backend com nodeJS + Express")
})

app.use(UsuariosRotas);
app.use(PostsRotas);

app.put('/teste/:codigo', (request, response) => {
    //Querys
    const query = request.query;
     let dados = "Query " + query.nome + " - " + query.sobrenome;

     //Parametros
     const params = request.params;
     dados += "<br> params: " + params.codigo
    
    //Body
    const body = request.body;
    dados += "<br> Body: " + JSON.stringify(body);
     
    return response.send(dados)
});

app.listen(port, host, () => {
    console.log(`servidor executado em http://${host}:${port}`)
});