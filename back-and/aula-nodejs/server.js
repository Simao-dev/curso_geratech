const { createServer } = require('node:http')
const Produtos = require('./routes/produtos');
const rotas = require('./routes/router');
const host = 'localhost';
const port = 3000;
//http://localhost:3000


const app = createServer((resquest, response) => {   
    const { url, method } = resquest;
    
    
    if (url === '/') {
        response.writeHead(200, { 'Content-type': 'text/plain' });
        return response.end("Ola nodeJS. Servidor ok ");
    }

    if(!rotas[url] || !rotas[url][method]) {
        response.writeHead(404, { 'Content-type': 'text/plain' });
        return response.end("pagina não encontrada - Not Found ");
    }

        const dados = rotas[url][method];
        response.writeHead(200, { 'Content-type': 'application/json' });
        return response.end(JSON.stringify(dados));
});

app.listen(port, host, () => {
    console.log(`Servidor NodeJS executando http://${host}:${port}`)
})