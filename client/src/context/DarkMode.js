import React, { createContext, useState} from "react";

const DarkModeContext = createContext({});

export const ModeProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("DARK_MODE")) || false);

    return (
        <DarkModeContext.Provider value = {{darkMode, setDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}





// bib: https://medium.com/lets-make-something-up/creating-light-dark-mode-on-a-react-app-with-context-589a5465f639

//      https://dev.to/sanspanic/implementing-dark-mode-in-react-via-context-4f1p#:~:text=What%20about%20dark%20mode%3F%201%201.%20Create%20The,...%204%204.%20Consuming%20Context%20wherever%20needed%20

//      https://levelup.gitconnected.com/dark-mode-in-react-533faaee3c6e