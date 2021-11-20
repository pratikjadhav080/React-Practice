import { useContext } from "react"    
import { AuthContext } from "../contexts/AuthContext";
import { Redirect,Route } from 'react-router-dom'

export const PrivateRoute = ({children,path}) =>{

    const {isAuth} = useContext(AuthContext)

    if(!isAuth){
        return <Redirect to ="/login"/>
    }

    return <Route path={path}>
        {children}
    </Route>
}