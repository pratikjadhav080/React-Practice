import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { Userstatus } from "./UserStatus";
import {MyForm} from "./custom/Mystyles"
const axios = require('axios')

export const Form = () => {

    const [text, setText] = useState({})
    const { isAuth, toggleAuth } = useContext(AuthContext)
    const {mytheme} = useContext(ThemeContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setText({
            ...text,
            [name]: value
        })
    }

    const signin = (e) => {
        e.preventDefault();
        console.log(text)
        axios.post('https://reqres.in/api/login', text)
            .then(function (response) {
                console.log(response.data);
                toggleAuth(response.data.token)
            }).catch((err) => {
                console.log("Error", err)
            })
    }

    if (!isAuth) {
        return (
            <>
            <h1>Enter your details and submit</h1>
                <MyForm onSubmit={signin} my={mytheme}>
                    <h1>This is my form</h1>
                    <input type="email" value={text.email} onChange={handleChange} name="email"></input>
                    <input type="password" value={text.password} onChange={handleChange} name="password"></input>
                    <input type="submit" value="Submit"></input>
                </MyForm>
            </>
        )
    }

    return (
        <>
            <Userstatus />
        </>
    )
}