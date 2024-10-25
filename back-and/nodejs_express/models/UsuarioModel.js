class UsuarioModel {

    static lista = [
        {
            nome: "pedro",
            login: "admin"
        }
    ]
     
    static listar() {
        return UsuarioModel.lista;
    }

    static consultarPorid() {

    }

    static criar() {
        UsuarioModel.lista.push({
            nome: "Maria",
            login: "Mari"
        })
    }

    static atualizar() {

    }

    static deletar() {

    }


}

module.exports = UsuarioModel; 