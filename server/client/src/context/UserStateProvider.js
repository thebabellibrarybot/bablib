import React, { useState} from "react";

import { useStateContex } from "./UseStateContext";

const UserStateProvider = ({children}) => {

    const userData = window.localStorage.getItem('userState')

    const [isUser, setIsUser] = useState(JSON.parse(userData) || 'bop');



    return (
        <useStateContex.Provider value = {{isUser, setIsUser}}>
            {children}
        </useStateContex.Provider> 
    )
}

export default UserStateProvider