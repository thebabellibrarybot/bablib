import React, { useEffect, useState} from "react";

import { useStateContex } from "./UseStateContext";

const UserStateProvider = ({children}) => {

    const [isUser, setIsUser] = useState(JSON.parse(localStorage.getItem("role")) || false);

    useEffect(() => {

        const handleStorageEvent = (event) => {
            console.log(event.key, event.newValue, 'handlestorage event')
        }

        if (isUser === false) {
            window.addEventListener('roles', handleStorageEvent)
            setIsUser(localStorage.getItem('roles'))
            console.log(isUser, 'isuser')
        }

    }, [isUser])


    return (
        <useStateContex.Provider value = {{isUser, setIsUser}}>
            {children}
        </useStateContex.Provider>
    )
}

export default UserStateProvider