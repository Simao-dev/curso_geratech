import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home"
import TodosProdutos from "../Pages/Produtos/TodosProdutos";
import Produtos from "../Pages/Produtos/Produtos";
import Login from "../componentes/Login/Login.jsx";
import Cadastro from "../componentes/Cadastro/Cadastro.jsx";


function Rotas (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/produtos" element={ <TodosProdutos/> } />
                <Route path="/visualizar" element={ <Produtos /> } />
                <Route path="/login" element={ <Login/> } />
                <Route path="/cadastro" element={ <Cadastro/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;