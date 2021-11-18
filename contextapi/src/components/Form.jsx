import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Userstatus } from "./UserStatus";
const axios = require('axios')

export const Form = () => {

    const [text, setText] = useState({})
    const { isAuth, toggleAuth } = useContext(AuthContext)


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
                <form onSubmit={signin}>
                    <input type="email" value={text.email} onChange={handleChange} name="email"></input>
                    <input type="password" value={text.password} onChange={handleChange} name="password"></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </>
        )
    }

    return (
        <>
            <Userstatus />
        </>
    )
}