import React, { useState } from "react";
import { ThemeContext } from "./themeContext";

const ThemeProvider = ({children}) => {
    
    // add state saver in local storage for onload...

    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') || 'light');
    localStorage.setItem('theme', isDarkMode)
    console.log('theme from themeProvider', isDarkMode)
    const setIsTheme = (props) => {
        setIsDarkMode(props)
        localStorage.setItem('theme', props)
    }
    
  
    return ( 
        <ThemeContext.Provider value = {{ isDarkMode, setIsTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;