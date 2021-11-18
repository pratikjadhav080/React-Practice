import { useContext,useState } from "react";
import { Form } from "./Form";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";
import {Theme} from "../components/styles"


export const Navbar = () => {

    const [showform, setShowform] = useState(false)
    const { toggleAuth } = useContext(AuthContext)
    const {mytheme,toggleTheme} = useContext(ThemeContext)

    return (
        <>
            <button onClick={() => { setShowform(true) }}>Login</button>

            <button onClick={() => { 
                setShowform(false)
                toggleAuth("")
            }}>Logout</button>

            <button onClick={() => { toggleTheme(mytheme===Theme.dark?Theme.light:Theme.dark) }}>ChangeTheme</button>
            
            {showform ? <Form /> : <h1>Kindly click on Login button</h1>}
        </>
    )
}