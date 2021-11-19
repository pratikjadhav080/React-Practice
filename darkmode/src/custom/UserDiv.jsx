import styled from "styled-components"

export const Div = styled.div`
height: 1024px; /* 100% Full-height */
position: relative; /* Stay in place */
background: ${(props)=>(props.m===true?"#1F2327":"#F5F6FA")};
box-shadow: 0px 0px 5px #E5E9F2;
`