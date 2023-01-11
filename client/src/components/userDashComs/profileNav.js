import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import useLogout from '../../hooks/useLogout';


const UserNav = (visability) => {

    const navigate = useNavigate();
    const logout = useLogout();
    const [visable, setVisable] = useState(false)

    useEffect(() => {

        setVisable(visability.visability)

    }, [visability.visability])

    const signOut = async () => {
        await logout();
        localStorage.removeItem('DARK_MODE');

        navigate('/');
    }


    
    return(
        <nav className = {visable ? "user-nav" : "invisible"}>

            <li className = "user-nav-item">
                <Link to="/userspine" className="user-nav-link">myProfile</Link>
            </li>
            <li className = "user-nav-item">
                <Link onClick = {signOut} to="/" className="user-nav-link">logout</Link>
            </li>
            <li className='darktoggle'>
                <p>add dark toggle userDashComponent here</p>
            </li>
            
        </nav>
    )


}
export default UserNav;