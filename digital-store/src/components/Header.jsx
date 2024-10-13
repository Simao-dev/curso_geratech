import React from "react";
import Logo from "../assets/logo.png"
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css'
import { Button } from 'primereact/button';
const Header = () => { 
    return ( 
        <>
            <div className="w-full h-12rem bg-white"> 
                <div  className="card flex flex-row justify-content-around pt-5">
                
                    <img className="w-13rem h-3rem"src={Logo} alt="" />
                
                    <div>
                        <input type="text" placeholder="Pesquisar produto..."  className="pi pi-search w-30rem h-4rem" />
                        <span className="pi pi-search"></span>
                    </div>
                    <p>Cadastre-se</p>
                        <Button label="Submit" />
                    <span className="pi-shopping-cart"></span>
                </div>
                <div>
                    <ul className="carde flex list-none	gap-8 pl-8">
                        <li>home</li>
                        <li>Produtos</li>
                        <li>Cetegorias</li>
                        <li>Meus Produtos</li>
                    </ul>
                </div>
            </div>
        </>
     );
}
 
export default Header;