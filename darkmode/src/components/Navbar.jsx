import '../styles/navbar.css'
import styled from "styled-components"
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Div = styled.div`
height: 1024px; /* 100% Full-height */
position: relative; /* Stay in place */
z-index: 1; /* Stay on top */
top: 0; /* Stay at the top */
left: 0;
background: ${(props)=>(props.theme===true?"#16191C":"#FFFFFF")}; /* Black*/
box-shadow: 0px 0px 5px #E5E9F2;
`

export const Navbar = () => {

    const {isDarkMode} = useContext(ThemeContext)

    return <Div id="navbar" theme={isDarkMode}>
        <img id="bucket" src="bucket.svg" alt="" />
        <img id="msg" src="msg.svg" alt="" />
        <img id="pages" src="pages.svg" alt="" />
        <img id="setting" src="setting.svg" alt="" />
        <img id="Maps" src="Maps.svg" alt="" />
        <div id="Stats">
            <img id="statsimage" src="Stats.svg" alt="" />
        </div>
        <img id="User" src="User.svg" alt="" />
        <img id="Bg" src="Bg.svg" alt="" />
    </Div>
}