    const UsuarioModel = require('../models/UsuarioModel');
    
 
    class UsuariosController{
        
        listar(request, response) {
            const dados = UsuarioModel.listar();
            return response.json(dados);
        }

        consultarPorid(request, response) {
            return UsuarioModel.consultarPorid()
        }

        criar(request, response) {
            UsuarioModel.criar();
            return  response.status(200).json({
                message: "usuario cadastrado com sucesso"
            })

        }

        atualizar(request, response) {
            return UsuarioModel.atualizar()
        }

        deletar(request, response) {
            return UsuarioModel.deletar()
        }

    }

 module.exports = UsuariosController;