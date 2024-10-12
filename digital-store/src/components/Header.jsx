import Logo from "../assets/logo.png"

const Header = () => {
    return ( 
        <>
            <div>
                <img src={Logo} alt="" />
                <ul>
                    <li>home</li>
                    <li>Produtos</li>
                    <li>Cetegorias</li>
                    <li>Meus Produtos</li>
                </ul>
            </div>
        </>
     );
}
 
export default Header;