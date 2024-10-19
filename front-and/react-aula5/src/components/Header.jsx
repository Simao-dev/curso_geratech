import { NavLink } from "react-router-dom";
import styled from "styled-components"

const Headercontainer = styled.header`
    background-color: blueviolet;
    padding: 0 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    & h1 {
        color: white;
    }

    & nav ul {
        display: flex;
        gap: 36px;
        list-style: none;
        & li a {
            color: #ffffff70;
            text-decoration: none;
            font-size: 18px;
            &:hover, &.active{
                color: #ffffff;
            }
        }
    }
;`

const Header = () => {
    return (
        <Headercontainer>
                <h1>LOGO</h1>
                <nav>
                    <ul>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/produtos"}>Produtos</NavLink></li>
                    </ul>
                </nav>
        </Headercontainer>
    );
}

export default Header;