const { createServer } = require('node:http')
const listarProdutos = require('./routes/produtos')
const host = 'localhost'
const port = 3000;
//http://localhost:3000

const produtos = [

];


const app = createServer((resquest, response) => {   

    const { url, method } = resquest;

    console.log("URL - ", url);
    console.log("Método/Verbo - ", method);

    if (url === '/') {
        response.writeHead(200, { 'Content-type': 'text/plain' });
    return response.end("Olá nodeJS opa ");

    }

    if(url ==='/produtos') {
        
        const dados = listarProdutos();
        
        response.writeHead(200, { 'Content-type': 'application/json' });
        return response.end(JSON.stringify(dados));
    }

    if(url ==='/produtos/adicionar') {    
        
        produtos.push({
            id: 3,
            nome:!'monitor 34p',
            valor: 3330.00
        })
        
        response.writeHead(200, { 'Content-type': 'text/plain' });
        return response.end("produto adicionado com sucesso!");
    }
    if(url ==='/produtos/remover') {    
        
        produtos.push()
        
        response.writeHead(200, { 'Content-type': 'text/plain' });
        return response.end("produto removido com sucesso!");
    }
    
    response.writeHead(404, { 'Content-type': 'text/plain' });
    return response.end("pagina não encontrada - Not Found ");


});

app.listen(port, host, () => {
    console.log(`Servidor NodeJS executando http://${host}:${port}`)
})