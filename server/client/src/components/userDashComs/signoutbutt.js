import React from "react";
import { useNavigate } from "react-router-dom";

import useStateHook from "../../hooks/useUserState";
//import useAuth from "../../hooks/useAuth";
import useTheme from '../../hooks/useTheme';


const SignOutButt = () => {

    const { isUser, setIsUser } = useStateHook()
    const { setIsTheme } = useTheme();
    const navigate = useNavigate();

    function handleSignOut () {
        setIsTheme('light')
        window.localStorage.setItem('roles', null)
        window.localStorage.setItem('theme', 'light')
        setIsUser(false)
        navigate('/')
        console.log('clicked')
    }

    if (isUser !== null) return (
        <div className="signout-butt" onClick={handleSignOut}>
            <p className = 'link'>userSignout</p>
        </div>
    )
}
export default SignOutButt;

// TODO fix route on sighout
// fix turning off auth correctly
// check signout from dave's videos
