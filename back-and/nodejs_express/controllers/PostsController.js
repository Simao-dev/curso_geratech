const PostsModel = require('../models/postsModel');
    
 
    class PostsController {
        
        listar(request, response) {
            const dados = PostsModel.listar();
            return response.json(dados);
        }

        consultarPorid(request, response) {
            const id = request.params.id;
            const dados = PostsModel.consultarPorid(id)
            return response.json(dados);
        }

        criar(request, response) {
            const body = request.body;
            PostsModel.criar(body);
            return  response.status(201).json({
                message: "post cadastrado com sucesso"
            })

        }

        atualizar(request, response) {
            const id = request.params.id;
            const body = request.body;
            PostsModel.atualizar(id, body)
            return  response.json({
                message: "post atualizados com sucesso"
            })

        }

        deletar(request, response) {
            const id = request.params.id;
            PostsModel.deletar(id)
            return response.json({
                message: "post deletado com sucesso"
            })
        }

    }

 module.exports = PostsController;