const express = require('express');
const UsuariosRotas = require('./rotas/UsuariosRotas');

const host = "localhost"
const port = 3000;

const app = express()

app.get('/', (request, response) => {
    return response.send("Ola, eu sou um backend com nodeJS + Express")
})

app.use(UsuariosRotas);


app.listen(port, host, () => {
    console.log(`servidor executado em http://${host}:${port}`)
});