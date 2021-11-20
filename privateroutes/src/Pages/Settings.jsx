import { useContext } from "react"    
import { AuthContext } from "../contexts/AuthContext";
import { Redirect } from 'react-router-dom'


export const Settings = () =>{

    
    const {isAuth} = useContext(AuthContext)

    if(!isAuth){
        return <Redirect to ="/login"/>
    }

    return <>
    <h1>Settings</h1>
    </>
}