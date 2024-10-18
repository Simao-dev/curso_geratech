import { Link } from 'react-router-dom';
import "./header.css"
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaNodeJs,FaSearch } from "react-icons/fa";


function Header (){
    return(
        <div className='container-header'>
            <div className='header'>
                <div className='header-options'>
                    <div className='header-logo'>
                    <FaNodeJs className='icon-logo-js' />
                        <h1>Digital College</h1>
                    </div>
                    <div className='header-input-pesquisar'>
                        <input className='input-pesquisar' type="text" id='pesquisar'
                        placeholder=' Pesquise o que procura'/>
                    </div>
                    <div className='btn-cad-login'>
                        <Link className='btn-cadastrar' to="/cadastro">Cadastre-se</Link>
                        <Link className='btn-entrar' to="/Login">Entrar</Link>
                        <Link to="/visualizar">
                            <MdOutlineLocalGroceryStore className='div-btn-store-icon' />
                        </Link>
                    </div>
                </div>
                <nav className='navbar-header'>
                    <div className='links-header'>
                        <Link to="/">Home</Link>
                        <div className='sublinhado-link'></div>
                    </div>
                    <div className='links-header'>
                        <Link to="/produtos">Produtos</Link>
                        <div className='sublinhado-link'></div>
                    </div>
                    <div className='links-header'>
                        <Link to="/">Categorias</Link>
                        <div className='sublinhado-link'></div>
                    </div>
                    <div className='links-header'>
                        <Link to="/">Meus pedidos</Link>
                        <div className='sublinhado-link'></div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;