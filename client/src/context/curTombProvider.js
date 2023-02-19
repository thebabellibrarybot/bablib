import React, { useState } from "react";
import { CurTombContext } from "./curTombContext";

const ThemeProvider = ({children}) => {
    
    // add state saver in local storage for onload...


    const [curTombArray, setCurTombArray] = useState('bop');
    const [curTombInfo, setCurTombInfo] = useState('bop');
    const [curTombEffect, setCurTombEffect] = useState(null);
    const [curTombImg, setCurTombImg] = useState('bop');

    return ( 
        <CurTombContext.Provider value = {{ curTombArray, setCurTombArray, curTombImg, setCurTombImg, curTombInfo, setCurTombInfo, curTombEffect, setCurTombEffect }}>
            {children}
        </CurTombContext.Provider>
    )
}
export default ThemeProvider;