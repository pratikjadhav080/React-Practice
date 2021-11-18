import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [isAuth, setIsAuth] = useState("");
    const toggleAuth = (toggle) => {
        setIsAuth(toggle)
    }

    return <AuthContext.Provider value={{ isAuth, toggleAuth }}>
        {children}
    </AuthContext.Provider>
}