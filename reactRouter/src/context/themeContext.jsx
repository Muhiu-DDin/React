import { createContext } from "react";
import { useState } from "react";

export const themeContext = createContext();

export const ThemeContextProvider = ({children})=>{
    const [theme , setTheme] = useState("light");
    return(
    <themeContext.Provider value={{theme , setTheme}}>
        {children}
    </themeContext.Provider>
    )
}
