import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

    const [isDarkMode,setIsDarkMode] = useState(false)

    const toggleTheme = (toggle) => {
        setIsDarkMode(toggle)
    }

    return <ThemeContext.Provider value={{isDarkMode,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}