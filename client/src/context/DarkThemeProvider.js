import React, { useState } from "react";
import { DarkModeContext } from "./DarkMode";

const DarkThemeProvider = ({children}) => {

    // connc state saver to presist route

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(curr => !curr)
    }
    return (
        <DarkModeContext.Provider value = {{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}
export default DarkThemeProvider;