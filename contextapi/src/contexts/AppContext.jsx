import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [state, setState] = useState("Dummy");

    const handleChange = (change) => {
        setState(change);
    }

    return <AppContext.Provider value={{ state, handleChange,age:10 }}>
        {children}
    </AppContext.Provider>
}