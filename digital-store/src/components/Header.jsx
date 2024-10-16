import React from "react";
import Logo from "../assets/logo.png"
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css'
import { Button } from 'primereact/button';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/InputIcon';
import { InputText } from 'primereact/InputText';
import { NavLink } from "react-router-dom";
const Header = () => { 
    return ( 
        <>
            <div className="w-full h-12rem bg-white"> 
                <div  className="card flex flex-row justify-content-around pt-5">
                
                    <img className="w-13rem h-3rem"src={Logo} alt="" />
                
                    <div className="flex gap-3">
                        <IconField iconPosition="right">  
                            <InputText className="w-30rem h-4rem border-none border-round-xl " style={{ backgroundColor: '#f8f8f8'}} placeholder=" Pesquisar produto..." />
                            <InputIcon className="pi pi-search"style={{ fontSize: '2rem', color:'#afafaf'}}> </InputIcon>
                        </IconField>
                    </div>
                    <p>Cadastre-se</p>
                        <div>
                            <Button label="Entrar" className="w-7rem h-3rem border-round-2xl text-white border-none" style={{backgroundColor:'#c92071'}}/>
                        </div>
                        <span><i className="pi pi-cart-plus" style={{ fontSize: '2rem', color:'#c92071'}}></i></span>
                </div>
                <div>
                    <ul className="carde flex list-none	gap-8 pl-8">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/"}>Produtos</NavLink></li>
                        <li><NavLink to={"/"}>Cetegorias</NavLink></li>
                        <li><NavLink to={"/"}>Meus Produtos</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
     );
}
 
export default Header;