import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  AboutForusers  from '../pgcomponents/aboutforusers';
import { FaCrow } from "react-icons/fa";
import Loginstuff from '../components/loginstuff';
import useTheme from '../hooks/useTheme';
import Navbar from '../navbar';

const BabelUsers = () => {
   
    const [login, setlogin] = useState(false);
    const {isDarkMode} = useTheme();

    const handleLogin = () => {
        setlogin(current => !current)
    }
    

    return (
        <div className={ isDarkMode }>
            <Navbar></Navbar>
            <nav className = "usernav">
                <div className='usernav-items'>
                    <div className={login ? 'user-inputs': 'invisible'}>
                        <Loginstuff></Loginstuff>
                    </div>
                    <li className = "clicked">
                        <button onClick={(handleLogin)}>Login</button>
                    </li>
                    <li className = "clicked">
                        <Link to="/register" className="link">Register</Link>
                    </li>
                    <div className='user-icon'>
                    <FaCrow></FaCrow>
                    </div>
                </div>
            </nav>

            <>
                <AboutForusers/>
            </>
        </div>
    )

}



export default BabelUsers;