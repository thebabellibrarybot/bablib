import React, { useState } from "react";
import { CurTombContext } from "./curTombContext";

const ThemeProvider = ({children}) => {
    
    // add state saver in local storage for onload...

    const curTombInfoMemory = window.localStorage.getItem('curTombInfo')

    const [curTombArray, setCurTombArray] = useState(null);
    const [curTombInfo, setCurTombInfo] = useState(JSON.stringify(curTombInfoMemory));
    const [curTombEffect, setCurTombEffect] = useState(null);


    
    return ( 
        <CurTombContext.Provider value = {{ curTombArray, setCurTombArray, curTombInfo, setCurTombInfo, curTombEffect, setCurTombEffect }}>
            {children}
        </CurTombContext.Provider>
    )
}
export default ThemeProvider;