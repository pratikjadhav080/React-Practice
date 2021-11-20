import { useState,useContext } from "react"    
import { AuthContext } from "../contexts/AuthContext";
const axios = require('axios')

export const Log = () => {

    const {isAuth, toggleAuth } = useContext(AuthContext)

    const [data,setData] = useState({
        email:"",
        password:""
    })

    const handleData = (e) =>{
        const {value,name} = e.target 
        console.log(value,name)

        setData({
            ...data,
            [name]:value
        })
    }

    const submitData=(e)=>{
        e.preventDefault()
        console.log(data)
        axios.post('https://reqres.in/api/login', data)
        .then(function (response) {
            console.log(response.data.token)
            toggleAuth(response.data.token)
        }).catch((err) => {
            console.log("Error", err)
        })
    }

    return <>
    {isAuth?<h1>You are succesfully logged in</h1>:<>
        <h1>You are on login page</h1>
        <form onSubmit={submitData}>
            <input type="email" name="email" onChange={handleData}></input><br/>
            <input type="password" name="password" onChange={handleData}></input><br/>
            <input type="submit" value="Submit"></input>
        </form>
        </>
        }
    </>
}