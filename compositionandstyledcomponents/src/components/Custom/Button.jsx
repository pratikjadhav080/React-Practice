import styled from "styled-components"

export const Button = styled.button`
padding:10px;
color:${(props)=>(props.theme==="dark"?"grey":"black")};
background-color:${(props)=>(props.theme==="dark"?"black":"grey")};
border:none;
border-radius:3px;
width:200px;
font-size:20px;
transition-duration: 1s;

&:hover {
    color:white;
    background-color: rgb(90, 8, 8);
}

&:active {
    transform: translateY(8px);
}

`