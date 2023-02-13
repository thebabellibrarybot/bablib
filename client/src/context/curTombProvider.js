import React, { useState } from "react";
import { CurTombContext } from "./curTombContext";

const ThemeProvider = ({children}) => {
    
    // add state saver in local storage for onload...

    const [curTombArray, setCurTombArray] = useState(null);
    const [curTombInfo, setCurTombInfo] = useState(null);
    const [curTombEffect, setCurTombEffect] = useState(null);
    
    return ( 
        <CurTombContext.Provider value = {{ curTombArray, setCurTombArray, curTombInfo, setCurTombInfo, curTombEffect, setCurTombEffect }}>
            {children}
        </CurTombContext.Provider>
    )
}
export default ThemeProvider;