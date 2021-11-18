import { createContext, useState } from "react";
import {Theme} from "../components/styles"

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

    const [mytheme,setMytheme] = useState(Theme.dark)

    const toggleTheme = (toggle) => {
        setMytheme(toggle)
    }

    return <ThemeContext.Provider value={{mytheme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}