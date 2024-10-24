class Usuarios { 
    static usuarios = [
        {
            id: 1,
            nome: 'Pedro',
            login: 'pssoares',
            senha: '123'
        }
    ];
    
    static listar() {
        const usuarios = [
            {
                id: 1,
                nome: 'Pedro',
                teste: 'pedro'
            }
        ];
        return usuarios;
    }

    static adicionar(id, nome, login) {
        Usuarios.usuarios.push({
            id: id,
            nome: nome,
            login: login
        });
    }
    
    static editar(indice) {
        
    }
    
    static excluir(indice) {
        Usuarios.usuarios.splice(indice, 1)
    }

}

module.exports = Usuarios;