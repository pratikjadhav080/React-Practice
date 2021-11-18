import styled from "styled-components"
// export const Button = styled.button`
// padding:10px;
// color:${(props)=>(props.theme==="dark"?"grey":"black")};
// background-color:${(props)=>(props.theme==="dark"?"black":"grey")};
// border:none;
// border-radius:3px;
// width:200px;
// font-size:20px;
// transition-duration: 1s;

// &:hover {
//     color:white;
//     background-color: rgb(90, 8, 8);
// }

// &:active {
//     transform: translateY(8px);
// }

// `

export const MyForm = styled.form`
border: 1px solid #fff;
border-radius: 3%;
display: flex;
align-items: center;
flex-direction: column;
width: 50%;
margin:10px auto 0px;
padding: 15px;
color:${(props)=>(props.my.color==="grey"?"grey":"black")};
background-color: ${(props)=>(props.my.backgroundcolor==="black"?"black":"grey")};
`
