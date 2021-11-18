import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Userstatus = () => {

    const { isAuth } = useContext(AuthContext)

    return (<>
        <h1>User is logged in and its token is : {isAuth}</h1>
    </>
    );
}