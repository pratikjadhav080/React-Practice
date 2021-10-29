
import styled from "styled-components"

const Form = styled.form`
border: 1px solid #fff;
border-radius: 3%;
display: flex;
align-items: center;
flex-direction: column;
width: 50%;
margin:10px auto 0px;
padding: 15px;
background-color: wheat;
`

export default function Forms({ children, submit }) {
    return <Form onSubmit={submit}>{children}</Form>
}
