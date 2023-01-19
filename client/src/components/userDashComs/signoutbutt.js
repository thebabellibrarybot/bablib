import React, { useState } from "react";
import { Link } from "react-router-dom";

import useStateHook from "../../hooks/useUserState";
//import useAuth from "../../hooks/useAuth";


const SignOutButt = () => {

    const from = "/"
    const { isUser, setIsUser } = useStateHook()
    const [signOut, setSignOut] = useState(0)

    function handleSignOut () {
        setSignOut(signOut + 1)
        setIsUser(false)
        window.localStorage.setItem('roles', null)
    }

    if (isUser !== null) return (
        <div className="signout-butt">
            <Link className = 'link' to = {from} onClick={handleSignOut}>userSignout</Link>
        </div>
    )
}
export default SignOutButt;

// TODO fix route on sighout
// fix turning off auth correctly
// check signout from dave's videos
