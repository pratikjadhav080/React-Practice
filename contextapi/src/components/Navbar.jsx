import { useContext,useState } from "react";
import { Form } from "./Form";
import { AuthContext } from "../contexts/AuthContext";


export const Navbar = () => {


    const [showform, setShowform] = useState(false)
    const { isAuth, toggleAuth } = useContext(AuthContext)


    return (
        <>
            <button onClick={() => { setShowform(true) }}>Login</button>
            <button onClick={() => { 
                setShowform(false)
                toggleAuth("")
            }}>Logout</button>

            {showform ? <Form /> : ""}
        </>
    )
}