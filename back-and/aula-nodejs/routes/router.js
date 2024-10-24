const Produtos = require("./produtos");
const Usuarios = require("./usuarios")

const rotas = {
    '/produtos': {
        'GET': Produtos.listar(),
        'POST': Produtos.adicionar(),
        'PUT': Produtos.editar(0),
        'DELETE': Produtos.excluir(0)
    },
    '/usuarios': {
        'GET': Usuarios.listar(),
        'POST': Usuarios.adicionar(),
        'PUT': Usuarios.editar(0),
        'DELETE': Usuarios.excluir(0)
    }
};

module.exports = rotas;