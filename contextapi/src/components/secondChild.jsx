import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { AuthContext } from "../contexts/AuthContext";


export const SecondChild = () => {

    const x = useContext(AppContext)
    const { token, handleTokenChange } = useContext(AuthContext)

    if (!token) {
        return (
            <div className="App">
                <h4>User not logged in. Please login to continue</h4>
                <input type="text" />
                <input type="password" />
                <button onClick={() => {
                    handleTokenChange("abcd")
                }}>Submit</button>
            </div>
        )
    }

    return <>
        <h1>Userloggedin</h1>
        <h1>My age is :{x.age}</h1>
    </>;
}