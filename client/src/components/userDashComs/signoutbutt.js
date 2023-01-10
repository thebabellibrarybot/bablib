import React, { useState } from "react";

import useStateHook from "../../hooks/useUserState";
import useAuth from "../../hooks/useAuth";

const SignOutButt = () => {

    const { isUser, setIsUser } = useStateHook()
    const { setAuth } = useAuth()
    const [signOut, setSignOut] = useState(0)

    function handleSignOut () {
        setSignOut(signOut + 1)
        setIsUser(false)
        window.localStorage.setItem('roles', null)
        setAuth(null)
    }

    if (isUser !== null) return (
        <div className="out-butt">

            <button onClick={handleSignOut}>
                <p>bye bitch: {signOut}</p>
                <p>this bitch is: {isUser}</p>
            </button>

        </div>
    )
}
export default SignOutButt;